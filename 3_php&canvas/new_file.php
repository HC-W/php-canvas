<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/9/25
 * Time: 15:59
 */

include "../phpmysql.php";
//获取传值  点击的学生学号
$sn=$_GET["sn"];
//数据库
$con=connectDB("localhost","root","","zzq1802");
$sql = "SELECT student.name,student.stu_num,student.sex,class.c_name,student_class_grade.s_grade FROM student JOIN student_class_grade ON student.stu_num = student_class_grade.s_num JOIN class ON student_class_grade.c_num = class.c_num WHERE student.stu_num = ".$sn." ORDER BY student.stu_num;";
$resArr=sel($con,$sql);
echo json_encode($resArr);