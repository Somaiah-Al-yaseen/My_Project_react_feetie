<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
// header("Content-type: application/json");

require_once '../db.php'; // Include your database connection code
// Query to fetch products
$query = "SELECT * FROM products";
$stmt = $pdo->prepare($query);
$stmt->execute();

// Fetch data as an associative array
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return data as JSON
header('Content-Type: application/json');
echo json_encode($result);
?>