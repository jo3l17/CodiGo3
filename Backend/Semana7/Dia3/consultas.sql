create table prueba.unatabla (
nombre varchar(45)
)
--agregar una columna a una tabla
alter table prueba.unatabla
add id int primary key not null, --auto increment
precio int default 0,
total int;
--Modificar columna de una tabla
alter table prueba.unatabla
alter column precio int not null --modify en MYSQL

select * from prueba.unatabla
insert into prueba.unatabla values
('un nombre',190)

insert into prueba.unatabla values
('un nombre',190,123,123)

alter table prueba.unatabla
drop column nombre;

drop table if exists prueba.unatabla

if exists ( select * from prueba.unatabla) drop table prueba.unatabla