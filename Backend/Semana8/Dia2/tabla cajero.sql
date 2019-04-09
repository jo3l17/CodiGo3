drop schema cajero
create schema cajero
create table cajero.cliente(
DNI varchar(8) primary key not null,
Nombre varchar(45) not null,
Apellido varchar(45) not null,
)

select* from cajero.cliente
select * from cajero.cajero
alter table cajero.cliente add clave varchar(4) not null default 1234

create table cajero.cuentas(
NroCuenta varchar(10) primary key not null,
monto money not null,
moneda varchar(1) not null,
clienteDNI varchar(8) not null,
foreign key (clienteDNI) references cajero.cliente(DNI),
idTarjeta varchar (45) not null,
foreign key (idTarjeta) references cajero.tarjeta(idTarjeta),
nroBanco int not null,
foreign key (nroBanco) references cajero.banco(nroBanco)
)
create table cajero.operaciones(
idoperacion int primary key not null identity(1,1),
NroCuenta varchar(10) not null,
foreign key (NroCuenta) references cajero.cuentas(NroCuenta),
idCajero int not null,
foreign key (idCajero) references cajero.cajero(idCajero)
)
drop table cajero.operaciones

create table cajero.banco(
nroBanco int primary key not null,
nombre varchar(45) not null,
Direccion varchar(100) not null,
telefono varchar(11) not null
)
insert into cajero.banco values
(1,'el amigo','av. los palotes 534','987654321')

create table cajero.cajero(
idCajero int primary key not null,
nroBanco int not null,
foreign key (nroBanco) references cajero.banco(nroBanco)
)
drop table cajero.cajero

drop table cajero.tarjeta
create table cajero.tarjeta(
idTarjeta varchar(45) primary key,
clienteDNI varchar(8) not null,
foreign key (clienteDNI) references cajero.cliente(DNI)
)

Drop table cajero.cuentas
select * from cajero.cliente
select * from cajero.tarjeta


insert into cajero.cliente values 
('71787798','Joel','Valdez'),
('77797877','Juan','Perez'),
('78098765','Luis','Rodriguez'),
('12345678','Marco','Polo'),
('87654321','Jose','Kelvin'),
('78789898','Maria','Juana'),
('76098767','Luisa','Lane'),
('74569873','Angelica','Jalixto')

insert into cajero.cuentas values
('1234567890',90099,'s','71787798','455789901234',1)

insert into cajero.cuentas values
('4556789091',345,'d','77797877','415189401538',1),
('1234567454',980,'s','78098765','475705902976',1),
('1234523890',90345,'d','12345678','412739903434',1),
('1234456890',9459,'s','87654321','452729012334',1),
('1232346789',1034,'d','78789898','455784791234',1),
('1237907890',3499,'s','76098767','455726791234',1),
('1278667890',5675,'d','74569873','451234991234',1),
('1238768995',6524,'s','71787798','455789912356',1),
('1298797890',8234,'s','12345678','412743533434',1),
('9594567890',8772,'s','87654321','452729078994',1),
('8734597790',2345,'s','78789898','423454791234',1),
('9834868690',8971,'s','76098767','455721235234',1),
('9842567890',7889,'s','74569873','451234578974',1)



update cajero.cuentas  
    SET moneda = 'd'  
    WHERE NroCuenta = '9594567890'

	select * from cajero.cuentas

insert into cajero.tarjeta values
('455789901234','71787798'),
('415189401538','77797877'),
('475705902976','78098765'),
('412739903434','12345678'),
('452729012334','87654321'),
('455784791234','78789898'),
('455726791234','76098767'),
('451234991234','74569873')

insert into cajero.tarjeta values
('455789912356','71787798'),
('412743533434','12345678'),
('452729078994','87654321'),
('423454791234','78789898'),
('455721235234','76098767'),
('451234578974','74569873')

select * from banco
select count (*) from cajero.cliente












