# Knight Smith React App

A React application configured for static hosting on Amazon S3.

## Local Development

Start the development server:
```bash
npm run dev
```

The app will be available at http://localhost:5173/

## Building for Production

Build the app for production:
```bash
npm run build
```

This creates a `dist` folder with the production build optimized for S3 static hosting.

## S3 Deployment

### Prerequisites
1. Install AWS CLI: `aws configure`
2. Set up your S3 bucket for static website hosting
3. Set the S3_BUCKET environment variable

### Deploy
```bash
export S3_BUCKET=your-bucket-name
./deploy.sh
```

The deploy script will:
- Build the React app
- Sync files to your S3 bucket
- Set proper content types for web assets
- Remove old files with --delete flag

### S3 Bucket Configuration

Configure your S3 bucket for static website hosting:
1. Enable static website hosting
2. Set index document to `index.html`
3. Set error document to `index.html` (for SPA routing)
4. Update bucket policy for public read access

Example bucket policy:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
