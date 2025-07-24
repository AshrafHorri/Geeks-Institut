<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Form Exercise #2 - POST Method</title>
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
            background-color: #2196F3;
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
            background-color: #1976D2;
        }

        .info-box {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 5px;
            padding: 15px;
            margin-top: 20px;
        }

        .info-box h3 {
            margin-top: 0;
            color: #856404;
        }

        .network-instructions {
            background-color: #e3f2fd;
            border: 1px solid #b3e5fc;
            border-radius: 5px;
            padding: 15px;
            margin-top: 20px;
        }

        .network-instructions h3 {
            margin-top: 0;
            color: #1976d2;
        }

        .step-list {
            background-color: #f8f9fa;
            border-left: 4px solid #2196F3;
            padding: 15px;
            margin: 15px 0;
        }

        .step-list ol {
            margin: 0;
            padding-left: 20px;
        }

        .step-list li {
            margin-bottom: 8px;
        }

        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }

        .comparison-table th,
        .comparison-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        .comparison-table th {
            background-color: #f8f9fa;
            font-weight: bold;
        }

        .code-example {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 3px;
            font-family: monospace;
            white-space: pre-wrap;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>Contact Form - POST Method</h1>

        <!-- Form with POST method pointing to same file -->
        <form action="file.html" method="POST">

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
            <p><strong>Method:</strong> POST</p>
            <p><strong>Action:</strong> file.html (same file)</p>
            <p><strong>Where will the data appear?</strong> The form data will NOT appear in the URL. Instead, it will be sent in the request body and can be viewed in the Network Tab of Developer Tools.</p>
        </div>

        <div class="network-instructions">
            <h3>🔍 How to View POST Data in Network Tab:</h3>

            <div class="step-list">
                <strong>Follow these steps to see the POST data:</strong>
                <ol>
                    <li>Open Developer Tools (Press F12 or right-click → Inspect)</li>
                    <li>Click on the <strong>Network</strong> tab</li>
                    <li>Make sure the Network tab is recording (should show red circle or "Record" button)</li>
                    <li>Fill out the form above and click "Send"</li>
                    <li>Look for the request to "file.html" in the Network tab</li>
                    <li>Click on that request to select it</li>
                    <li>Look for the <strong>Request</strong> section or <strong>Form Data</strong> section</li>
                </ol>
            </div>

            <p><strong>What you'll see in the Network Tab:</strong></p>
            <div class="code-example">Request Method: POST
Request URL: http://localhost/file.html
Status Code: 200 (or 404 if not on server)

Form Data:
    name: [your entered name]
    message: [your entered message]</div>
        </div>

        <div class="info-box">
            <h3>📊 GET vs POST Comparison:</h3>
            <table class="comparison-table">
                <tr>
                    <th>Aspect</th>
                    <th>GET Method</th>
                    <th>POST Method</th>
                </tr>
                <tr>
                    <td><strong>Data Location</strong></td>
                    <td>URL query parameters</td>
                    <td>Request body</td>
                </tr>
                <tr>
                    <td><strong>URL Visibility</strong></td>
                    <td>Data visible in URL</td>
                    <td>Data hidden from URL</td>
                </tr>
                <tr>
                    <td><strong>Data Size Limit</strong></td>
                    <td>Limited by URL length</td>
                    <td>No practical limit</td>
                </tr>
                <tr>
                    <td><strong>Security</strong></td>
                    <td>Less secure (visible)</td>
                    <td>More secure (hidden)</td>
                </tr>
                <tr>
                    <td><strong>Browser History</strong></td>
                    <td>Data saved in history</td>
                    <td>Data not saved in history</td>
                </tr>
                <tr>
                    <td><strong>Bookmarking</strong></td>
                    <td>Can be bookmarked</td>
                    <td>Cannot be bookmarked</td>
                </tr>
            </table>
        </div>

        <!-- JavaScript to show alert when form is submitted -->
        <script>
            document.querySelector('form').addEventListener('submit', function(e) {
                // Show alert to remind user to check Network tab
                setTimeout(() => {
                    alert('Form submitted with POST method!\n\nTo see the data:\n1. Open Developer Tools (F12)\n2. Go to Network tab\n3. Find the request to "file.html"\n4. Click on it and check the Form Data section');
                }, 100);
            });
        </script>
    </div>
</body>
</html>