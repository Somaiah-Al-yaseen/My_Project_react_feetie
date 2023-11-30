<?php
// Allow requests from any origin
header('Access-Control-Allow-Origin: *');

// Allow the following HTTP methods
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

// Allow the following headers in the request
header('Access-Control-Allow-Headers: Content-Type');

require_once '../db.php'; // Include your database connection code
// productDetails.php

// Include your database connection code

if (isset($_GET['productId'])) {
    $productId = $_GET['productId'];

    try {
        // Prepare and execute a query to fetch product details by productId
        $sql = "SELECT * FROM products WHERE ProductID = :productId";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':productId', $productId, PDO::PARAM_INT);
        $stmt->execute();

        // Fetch the product details as an associative array
        $productDetails = $stmt->fetch(PDO::FETCH_ASSOC);

        // Return the product details as JSON
        header('Content-Type: application/json');
        echo json_encode($productDetails);
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    // Handle the case where productId is not provided
    echo "ProductID is not provided.";
}
?>
