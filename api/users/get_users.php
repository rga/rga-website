<?php


$userlist='/etc/bukkit/plain/users.list';


$data=array('success'=>false,'error'=>'unknown eror');

if(($handle=@fopen($userlist,'r'))!=FALSE){
	$users=array();
	$line=FALSE;
	while(($line=fgets($handle))!=FALSE){
		$line=trim($line);
		if(strlen($line)<1)continue;
		array_push($users,$line);
	}
	fclose($handle);
	$data['success']=true;
	$data['error']='success';
	$data['data']['users']=$users;
}else{
	$data['success']=true;
	$data['error']='success';
	$data['data']['users']=array();
}

header('Content-Type: application/json');
echo json_encode($data);


?>
