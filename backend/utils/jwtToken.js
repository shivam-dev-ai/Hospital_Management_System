export const generateToken = (user, message, statusCode, res) => {
    // Generate JWT Token
    const token = user.generateJsonWebToken();

    // Determine the cookie name based on the user's role
    const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

    // Set cookie options with a 365-day expiration
    const options = {
        httpOnly: true, // Secure the cookie to HTTP only
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 365 days
        secure: process.env.NODE_ENV === 'production', // Use secure flag in production
    };

    // Send the token and user data in response
    res.status(statusCode).cookie(cookieName, token, options).json({
        success: true,
        message,
        user,
        token,
    });
};
