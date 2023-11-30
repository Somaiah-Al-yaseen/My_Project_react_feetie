<?php include '../db.php'?>

<?php 
if (isset($_GET['id'])) {
    $id = $_GET['id'];
}

if(isset($_POST)){
    $data = file_get_contents("php://input");
    $user = json_decode($data , true);

    $Fname = $user['Fname'];
    $Lname = $user['Lname'];
    $password = $user['password'];
    $email = $user['email'];
    $phone = $user['phone'];
    $address = $user['address'];

    try {
        $stmt = $pdo->prepare("UPDATE users SET FirstName = :Fname, LastName = :Lname, Email = :email, password = :password , ShippingAddress = :address , phone = :phone WHERE UserId= :id");
        $stmt->bindParam(':Fname', $Fname);
        $stmt->bindParam(':Lname', $Lname);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':address', $address);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        echo "User data updated successfully.";
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
} else {
    die('Nothing to insert');
}
?>
