describe('FormatBR', function () {

	it('remover pontuacao', function () {    
		expect(removePontuaction('')).toEqual('');
		expect(removePontuaction('220.105.688-93')).toEqual('22010568893');
		expect(removePontuaction('11 11')).toEqual('1111');
	});

	it('remover', function () {    
		expect(removeAllButNumbers('')).toEqual('');
		expect(removeAllButNumbers('100,000',',')).toEqual('100,000');
		expect(removeAllButNumbers('11.11')).toEqual('1111');
	});

	it('formatar numeros', function () {
		expect(format('100,000',{decimal:',', grouping:'.',fractional:3})).toEqual('100,000');
		expect(format('100,010',{decimal:',', grouping:'.',fractional:3})).toEqual('100,010');
		expect(format('100',{decimal:',', grouping:'.',fractional:3})).toEqual('100,000');
	});

	it('formatar cnpj', function () {
		expect(formatCnpj('75101873000270')).toEqual('75.101.873/0002-70');
	});


	it('formatar cnpj', function () {
		expect(formatCnpj('002.558.134/0001-58')).toEqual('002.558.134/0001-58');
	});

	it('formatar cnpj', function () {
		expect(formatCnpj('002558134000158')).toEqual('002.558.134/0001-58');
	});

	it('formatar cnpj', function () {
		expect(formatCnpj('00255813400015')).toEqual('00.255.813/4000-15');
	});

	it('formatar numeros', function () {
		expect(format('1234',{decimal:',', grouping:'.',fractional:3})).toEqual('1.234,000');
		expect(format('1234567',{decimal:',', grouping:'.',fractional:3})).toEqual('1.234.567,000');
		expect(format('1234567,89',{decimal:',', grouping:'.',fractional:3})).toEqual('1.234.567,890');
		expect(format('1.234.567,89',{decimal:',', grouping:'.',fractional:3})).toEqual('1.234.567,890');
		expect(format('01.234.567,89',{decimal:',', grouping:'.',fractional:3})).toEqual('1.234.567,890');
		expect(format('101.234.567,89',{decimal:',', grouping:'.',fractional:3})).toEqual('101.234.567,890');
		expect(format('101.234.567,8091',{decimal:',', grouping:'.',fractional:3})).toEqual('101.234.567,809');
	});

	it('testar formulario', function () {
		loadFixtures("format_form.html");
		$("#numero").val("1234");
		$("#numero").formatNumber();
		expect($("#numero")).toHaveValue("1.234,000000");
	});

	it('testar campo vazio formulario', function () {
		loadFixtures("format_form.html");
		$("#numero").val("");
		$("#numero").formatNumber();
		expect($("#numero")).toHaveValue("");
	});

	it('testar formulario - CNPJ', function () {
		loadFixtures("format_form.html");
		$("#numero").val("002.558.134/0001-58");
		$("#numero").formatCnpj();
		expect($("#numero")).toHaveValue("002.558.134/0001-58");
	});

	it('testar formulario - CNPJ', function () {
		loadFixtures("format_form.html");
		$("#numero").val("002558134/0001-58");
		$("#numero").formatCnpj();
		expect($("#numero")).toHaveValue("002.558.134/0001-58");
	});

	it('testar formulario - CNPJ', function () {
		loadFixtures("format_form.html");
		$("#numero").val("002558134/000-58");
		$("#numero").formatCnpj();
		expect($("#numero")).toHaveValue("00.255.813/4000-58");
	});
});
