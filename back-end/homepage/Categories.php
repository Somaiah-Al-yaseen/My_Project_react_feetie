<?php
// Allow requests from any origin
header('Access-Control-Allow-Origin: *');

// Allow the following HTTP methods
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

// Allow the following headers in the request
header('Access-Control-Allow-Headers: Content-Type');

require_once '../db.php'; // Include your database connection code

// Check if the CategoryID is provided in the request
if (isset($_GET['categoryId'])) {
    $categoryId = $_GET['categoryId'];

    try {
        // Prepare and execute a query to fetch products based on CategoryID
        $sql = "SELECT * FROM products WHERE CategoryID = :categoryId";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':categoryId', $categoryId, PDO::PARAM_INT);
        $stmt->execute();

        // Fetch the results as an associative array
        $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Return the products as JSON
        header('Content-Type: application/json');
        echo json_encode($products);
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    // Handle the case where CategoryID is not provided
    echo "CategoryID is not provided.";
}
?>
