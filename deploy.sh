#!/bin/bash

# Build the React app
echo "Building React app..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "Build failed. Exiting."
    exit 1
fi

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "AWS CLI not found. Please install it first."
    exit 1
fi

# Check if S3_BUCKET environment variable is set
if [ -z "$S3_BUCKET" ]; then
    echo "Please set the S3_BUCKET environment variable"
    echo "Example: export S3_BUCKET=my-react-app-bucket"
    exit 1
fi

echo "Deploying to S3 bucket: $S3_BUCKET"

# Sync the dist folder to S3
aws s3 sync dist/ s3://$S3_BUCKET --delete

# Set proper content types for assets
aws s3 cp s3://$S3_BUCKET --recursive \
    --exclude "*" \
    --include "*.html" \
    --content-type "text/html" \
    --metadata-directive REPLACE

aws s3 cp s3://$S3_BUCKET --recursive \
    --exclude "*" \
    --include "*.js" \
    --content-type "application/javascript" \
    --metadata-directive REPLACE

aws s3 cp s3://$S3_BUCKET --recursive \
    --exclude "*" \
    --include "*.css" \
    --content-type "text/css" \
    --metadata-directive REPLACE

echo "Deployment complete!"
echo "Your app should be available at: http://$S3_BUCKET.s3-website-us-east-1.amazonaws.com"