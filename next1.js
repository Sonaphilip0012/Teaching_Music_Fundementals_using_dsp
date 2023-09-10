<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Research Paper</title>
    <style>
        /* Your CSS Styles Here */
    </style>
</head>
<body>
    <div id="ResearchPaper" class="container">
        <h1 class="section-title">TEACHING MUSIC FUNDAMENTALS USING WEB-BASED INTERACTIVE PLATFORM AND REAL-TIME AUDIO ANALYSIS</h1>
        <div class="author-info">Ashwin P Joby, Allen Mammen Abraham, Sona Philip, Tessa Ann Josy, Sinith M.S, Rajeev Rajan</div>
        <div class="content">
            <!-- Your paper content here -->
        </div>
        <button id="showAbstractBtn">Show Abstract</button>
        <div id="abstract" style="display: none;">
            <h2>Abstract</h2>
            <p>Music education has traditionally relied on theoretical instruction and sheet music. However, integrating real-time audio analysis and interactive learning tools introduces a paradigm shift in how students can grasp music fundamentals...</p>
        </div>
    </div>

    <script>
        // JavaScript code for toggling the abstract visibility
        const showAbstractBtn = document.getElementById('showAbstractBtn');
        const abstract = document.getElementById('abstract');

        showAbstractBtn.addEventListener('click', () => {
            if (abstract.style.display === 'none') {
                abstract.style.display = 'block';
                showAbstractBtn.textContent = 'Hide Abstract';
            } else {
                abstract.style.display = 'none';
                showAbstractBtn.textContent = 'Show Abstract';
            }
        });
    </script>
</body>
</html>
