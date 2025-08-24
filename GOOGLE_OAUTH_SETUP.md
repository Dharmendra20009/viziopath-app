# Google OAuth Setup Guide

## Prerequisites
- Google Cloud Console account
- React application with @react-oauth/google package installed

## Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API

## Step 2: Configure OAuth Consent Screen
1. Go to "APIs & Services" > "OAuth consent screen"
2. Choose "External" user type
3. Fill in required information:
   - App name
   - User support email
   - Developer contact information
4. Add scopes: `email`, `profile`, `openid`
5. Add test users if needed

## Step 3: Create OAuth 2.0 Credentials
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Add authorized JavaScript origins:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (for production)
5. Add authorized redirect URIs:
   - `http://localhost:3000`
   - `https://yourdomain.com`
6. Copy the Client ID

## Step 4: Update Your Application
1. Replace `YOUR_GOOGLE_CLIENT_ID` in `src/App.tsx` with your actual Client ID
2. Create a `.env` file in your project root:
   ```
   VITE_GOOGLE_CLIENT_ID=your_actual_client_id_here
   ```
3. Update `src/App.tsx` to use the environment variable:
   ```tsx
   <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
   ```

## Step 5: Backend Integration
You'll need to implement backend endpoints to handle Google OAuth:
- `/api/auth/google` - Verify Google ID token
- `/api/auth/login` - Your existing login endpoint
- JWT token generation and validation

## Security Notes
- Never commit your Client ID to version control
- Use environment variables for sensitive data
- Implement proper token validation on the backend
- Consider rate limiting for OAuth endpoints

## Testing
1. Start your development server
2. Navigate to the login page
3. Click the Google Sign-In button
4. Complete the OAuth flow
5. Check browser console for success/error messages

## Troubleshooting
- Ensure all origins and redirect URIs are correctly configured
- Check browser console for CORS errors
- Verify Google+ API is enabled
- Ensure OAuth consent screen is properly configured
