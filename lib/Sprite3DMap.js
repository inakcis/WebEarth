/**
 * Created by Administrator on 2014/8/8.
 */
$(document).ready(function(){
    var person = new WorkerBee("Jay");
    var txt="";
    for (x in person)
    {
        txt=txt + x+"--"+typeof person[x]+"\n";
    }
    alert(txt);
    alert(person.dept);
    var person1 = new Engineer("Jay1");
    alert(person1.gender);

});

// 多重prototype链的例子
function Employee(strName)
{
    this.name = strName;
    this.dept = "general";
    this.gender = "unknown";
}
function WorkerBee()
{
    this.projects = [];
    this.hasCar = false;
}
WorkerBee.prototype = new Employee(); // 第一层prototype链

function Engineer()
{
    this.dept = "engineer"; //覆盖了 "父对象"
    this.language = "javascript";
}
Engineer.prototype = new WorkerBee(); // 第二层prototype链
