function descobrirTamanhoDaPedra(largura_passarela,comprimento_passarela){
	if (numeroPrimo(largura_passarela)){
		if(largura_passarela<comprimento_passarela){
		return comprimento_passarela
		}
		else{
			return comprimento_passarela
		}
	}
	else if(numeroPrimo(comprimento_passarela)){
		if(largura_passarela>comprimento_passarela){
		return comprimento_passarela
		}
		else{
			return comprimento_passarela
		}
	}
	else {
		return mdc(comprimento_passarela,largura_passarela)
	}
}
