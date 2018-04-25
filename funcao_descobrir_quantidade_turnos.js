function quantidadeDeTurnos(areaDaPedra,areaDaPassarela,qtdPedras){
	contador=0;
	do{
		contador++;
		areaDaPedra = areaDaPedra + qtdPedras * areaDaPedra;
	}while(areaDaPedra <= areaDaPassarela);
	return contador;
}