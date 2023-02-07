<h2>Quais as principais diferenças entre as nossas propriedades de posicionamento</h2>
<br>
<h3><strong>display: inline</strong></h3>

Colocando display: inline nos elementos permite eles se posicionarem um do lado do outro, o problema do display: inline é que os elementos não aceitam mais que seja modificada tanto a width quanto a height. Isso limita MUITO nossas possibilidades.

<h3><strong>display: inline-block</strong></h3>

O display: inline-block permite os elementos se posicionarem um do lado do outro porém, diferentemente do display: inline ele permite que os elementos tenham sua width e height modificadas. Por esse motivo o display: inline-block é muito mais interessante na maioria dos casos do que o display: inline.

O problema de usar display: inline-block é espaçar os elementos entre si. Para fazer isso teríamos que colocar margins e fazer contas.

<h3><strong>float: left | right</strong></h3>

O float é mais complicado, ele empurra o elemento para um dos lados (left | right) e os elementos que estão embaixo sobem. Isso nem sempre é o que a gente quer. Além do mais o float não permite que usemos a propriedade vertical-align: middle para alinhar os elementos verticalmente. Ou seja, para contornar isso uma possibilidade seria ter que colocar margin-top ou bottom nos elementos e usar os temidos números mágicos!

<h3><strong>display: flex</strong></h3>

O display: flex veio com o intuito de facilitar nossa vida nesses aspectos de posicionamento. Ele permite os elementos ficarem um do lado do outro, permite espaçar os elementos de forma mais intuitiva e sem ter que fazer cálculos. Além disso ele também permite alinhar os elementos verticalmente de forma fácil.