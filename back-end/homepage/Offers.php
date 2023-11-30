<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

require_once '../db.php'; // Include your database connection code

try {
    // Prepare and execute a query to fetch products where 'sales' = 1
    $sql = "SELECT * FROM products WHERE sales = 1";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    // Fetch the results as an associative array
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return the products as JSON
    header('Content-Type: application/json');
    echo json_encode($products);
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
