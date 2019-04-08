create table usuarios(
nombre varchar(50),
clave varchar(20))

insert into usuarios values
('jo3l17','1234'),
('user','notengo')

select * from usuarios where nombre = 'jo3l17' and clave = '1234'
select count (*) from usuarios where nombre = 'jo3l17' and clave = '1234'
delete from usuarios where nombre=''

select * from usuarios


update usuarios set nombre = 'asdf',clave ='1234' where nombre = 'asd' and clave = '123'