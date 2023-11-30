<?php include '../db.php'?>
<?php 
if(isset($_POST)){

    $data = file_get_contents("php://input");

    $user = json_decode($data , true);

    $Fname = $user['Fname'];
    $Lname = $user['Lname'];
    $password = $user['password'];
    $email = $user['email'];
    $phone = $user['phone'];
    $address = $user['address'];

    


}else{
    die('nothing to insert');
}

$stmt = $pdo->prepare("INSERT INTO users (FirstName, LastName, Email, Password , ShippingAddress , phone) VALUES (:Fname, :Lname, :email, :password , :address , :phone)");
$stmt->bindParam(':Fname', $Fname);
$stmt->bindParam(':Lname', $Lname);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':password', $password);
$stmt->bindParam(':address', $address);
$stmt->bindParam(':phone', $phone);
$stmt->execute();
?>