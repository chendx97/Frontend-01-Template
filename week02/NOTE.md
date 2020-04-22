# 每周总结可以写在这里
### 巴克斯范式
*多次  
| 或  
+ 至少一次  
<Number> := "0" | "1" | "2" | ... | "9"  

<DecimalNumber> := "0" | (("1" | "2" | ... | "9") <number>*) 

<PrimaryExpression> := <DecimalNumber> | "(" <LogicalExpression> ")" 

加法<AdditiveExpression> := <DecimalNumber> | <AdditiveExpression> "+ " <DecimalNumber>  
<AdditiveExpression> := <MultiplicativeExpression> | <AdditiveExpression> "+"  <MultiplicativeExpression> |   
<AdditiveExpression> "-"  <MultiplicativeExpression>    

乘法<MultiplicativeExpression> := <DecimalNumber> | <MultiplicativeExpression> "*" <DecimalNumber>  
<MultiplicativeExpression> := <PrimaryExpression> | <MultiplicativeExpression> "*" <PrimaryExpression> |   
<MultiplicativeExpression> "/" <PrimaryExpression>    

<LogicalExpression> := <AdditiveExpression> | <LogicalExpression> "||" <AdditiveExpression> | <AdditiveExpression> "&&"    <AdditiveExpression>   

### 强/弱类型 动态/静态类型
强类型 无类型转换   
弱类型 有类型转换    
动态类型 运行期间才做类型检查    
静态类型 编译期间检查类型，使用数据之前必须先声明变量类型    