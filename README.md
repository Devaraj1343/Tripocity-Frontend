# Tripocity-Frontend

Create Tourism Package – API
URL: POST /api/packages/create
Auth: Bearer Token (Admin only)
Content-Type: multipart/form-data
Features :
Create a tourism package with:
Title, price, country, duration, type
Multiple dynamic places (name, description, duration, image)
Image support (file upload or image URL)
Admin-only access (verifyAdmin middleware)
Uses multer for file handling

