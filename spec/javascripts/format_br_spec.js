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
});