
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Form Exercise</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }

        .form-container {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #555;
        }

        input[type="text"] {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box;
        }

        textarea {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            box-sizing: border-box;
            resize: vertical;
            min-height: 100px;
        }

        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: background-color 0.3s;
        }

        input[type="submit"]:hover {
            background-color: #45a049;
        }

        .info-box {
            background-color: #e7f3ff;
            border: 1px solid #b3d9ff;
            border-radius: 5px;
            padding: 15px;
            margin-top: 20px;
        }

        .info-box h3 {
            margin-top: 0;
            color: #0066cc;
        }

        .url-display {
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 3px;
            font-family: monospace;
            word-break: break-all;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>Contact Form</h1>

        <!-- Form with GET method pointing to same file -->
        <form action="Exercise1.html" method="GET">

            <!-- Text input for name -->
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required>
            </div>

            <!-- Textarea for message input -->
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" placeholder="Enter your message here..." required></textarea>
            </div>

            <input type="submit" value="Send">
        </form>

        <div class="info-box">
            <h3>Form Information:</h3>
            <p><strong>Method:</strong> GET</p>
            <p><strong>Action:</strong> Exercise1.html (same file)</p>
            <p><strong>Where will the data appear?</strong> The form data will appear in the URL as query parameters after submission.</p>

            <p><strong>Example URL after submission:</strong></p>
            <div class="url-display">
                Exercise1.html?name=John+Doe&message=Hello+this+is+my+message
            </div>
        </div>

        <!-- Display submitted data if present -->
        <script>
            // Check if there are URL parameters and display them
            const urlParams = new URLSearchParams(window.location.search);
            const name = urlParams.get('name');
            const message = urlParams.get('message');

            // If name and message are present, display them
            if (name && message)
            {
                document.body.innerHTML += `
                    <div class="form-container" style="margin-top: 20px; background-color: #e8f5e8;">
                        <h2>Submitted Data:</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Message:</strong> ${message}</p>
                        <p><strong>Current URL:</strong></p>
                        <div class="url-display">${window.location.href}</div>
                        <br>
                        <button onclick="window.location.href='Exercise1.html'" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">Reset Form</button>
                    </div>
                `;
            }
        </script>
    </div>
</body>
</html>
