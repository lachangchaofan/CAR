<?php 
	//利用变量的变量生成变量
    foreach ($_GET as $key => $value) {
    	    $$key = $value;
    } 
	//链接sae的数据
	mysql_connect(SAE_MYSQL_HOST_M.":".SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS); 
	mysql_select_db(SAE_MYSQL_DB);
	
	mysql_query("set names utf8");
	
	//首先判断数据库中有没有这个用户
	$query = "SELECT openid,score FROM rank WHERE openid='{$openid}'";
	$result = mysql_query($query);
	
	$row = mysql_fetch_assoc($result);//openid,score
	$num = mysql_num_rows($result);//得到数量//
	
	if ($num>0){
		//有
		if ($score>$row["score"]){
			//超过了
			$openid = $row["openid"];//""
			$query = "UPDATE rank SET score='{$score}' WHERE openid='{$openid}'";
			mysql_query($query);
			$num = mysql_affected_rows();
		}
	}else{
		//没有-》插入
		$query = "INSERT INTO rank(id,username,headimgurl,openid,score) VALUES(null,'{$username}','{$headimgurl}','{$openid}',{$score})";
		mysql_query($query);
		$num = mysql_insert_id();
	}
	
	if ($num > 0){		
		$query = "SELECT * FROM rank ORDER BY score DESC LIMIT 0,5";
		$result = mysql_query($query);
		$arr = array();
		while($row = mysql_fetch_assoc($result)){
			$arr[] = $row;
		}
		echo json_encode($arr);
	}
	
?>