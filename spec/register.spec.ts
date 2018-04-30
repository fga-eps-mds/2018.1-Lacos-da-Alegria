describe("testando",function(){

  var user;

  beforeEach(function(){
    user = {
      username:'ZecaPagodinho',
      password:'12345abc',
      email:'testeeee@teste.com',
      cpf:'246966600',
      name:'zecapagodinho',
      birth: '2018-04-26',
      region:'cataratas',
      preference:'deus',
      ddd:'11',
      whatsapp:'40028922',
      address:'casa',
      howDidYouKnow:'pericles',
      want_ongs:'True',
      genre: 'M'
    };
  });

  it("user", function(){
      expect(user.username).toBe('ZecaPagodinho');
  });

  it("teste",function(){
    expect(1).toBe(1);
  });

});
