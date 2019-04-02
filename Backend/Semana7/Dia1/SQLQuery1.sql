/*select first_name, state from sales.customers
where state = 'CA';

select first_name, state from sales.customers
where state = 'CA'
order by last_name, first_name desc;*/
use BikeStores

select first_name, state from sales.customers
where state = 'CA'
order by len(first_name) desc;

select * from sales.customers -- select* no es una buena practica
order by 1 -- tampoco es una buena practica

select state from sales.customers
group by state

select city, count(*) from sales.customers
group by city
having city = 'Astoria'

select * from sales.customers
order by customer_id
offset 10 rows
fetch next 10 rows only

select top 5 * from sales.customers

select top 5 * from  sales.customers
order by last_name

select top 5 with ties* from  sales.customers
order by last_name

select distinct last_name from sales.customers
select last_name from sales.customers order by last_name

select distinct phone from sales.customers order by phone;

select product_id, product_name, category_id, model_year,list_price from production.products
where list_price>400 and list_price<1000

select product_id, product_name, category_id, model_year, list_price from production.products
where list_price between 499.99 and 5299.99


--% representa una cadena de texto
-- _representa un solo caracter
select product_id, product_name, category_id, model_year,list_price from production.products
where product_name like '%201[456]%'

create schema prueba
 create table prueba.promociones (
 idPromocion int primary key not null identity (1,1),
 nombre_promocion varchar (255) not null,
 descuento decimal (3,2) default 0,
 )

 select * from prueba.promociones
 insert into prueba.promociones values
 ('Descuento de verano',0.20)
 insert into prueba.promociones (nombre_promocion) values
 ('Descuento de invierno')

 insert into prueba.promociones (nombre_promocion,descuento)
 output inserted.idPromocion, inserted.nombre_promocion,inserted.descuento
 values ('Descuento de juguetes',0.90)


 --insercion de varias filas/registros
  insert into prueba.promociones (nombre_promocion,descuento)
 values ('Descuento de juguetes',0.90),
 ('Descuenton',0.99),
 ('Sin descuento',0)

 create table prueba.direcciones (
 iddireccion int not null primary key identity (1,1),
 calle varchar (255) not null,
 ciudad varchar(50),
 estado varchar(25),
 zip varchar(5)
 )

 insert into prueba.direcciones
 select street,city,state,zip_code from sales.customers

 select * from prueba.direcciones insert into prueba.direcciones
 select street,city,state,zip_code from sales.customers

 --TRUNCATETABLE=>borra los datos de una tabla
 truncate table prueba.direcciones

 create table prueba.tarifa(
 idtarifa int primary key identity (1,1),
 nombre_tarifa varchar(20),
 actualizadoEl date default '19800101'
 )
 insert into prueba.tarifa (nombre_tarifa) values
 ('Tarifa A'),
 ('Tarifa CE'),
 ('Tarifa LO'),
 ('Tarifa PIE'),
 ('Tarifa KOD'),
 ('Tarifa ENN'),
 ('Tarifa SDC'),
 ('Tarifa EER'),
 ('Tarifa All')
 select * from prueba.tarifa
 update prueba.tarifa set actualizadoEl = getdate();
 update prueba.tarifa set nombre_tarifa = 'NUEVA TARIFA' where idtarifa in(1,3,6)

 delete from prueba.tarifa where nombre_tarifa like '%nueva%'
 delete top (2) from prueba.tarifa
 delete from prueba.tarifa

 select first_name+' '+last_name as 'Nombre Completo' from sales.customers
 where 'Nombre Completo' like '%r%'

 select first_name from sales.customers --1445 filas
 union all
 select first_name from sales.staffs --10 filas

 select last_name from sales.customers --1445 filas
intersect
 select last_name from sales.staffs --10 filas

select last_name from sales.customers
except
select last_name from sales.staffs


select last_name from sales.staffs
except
select last_name from sales.customers

select order_id, order_date, customer_id from sales.orders where customer_id in(
select customer_id from sales.customers
where city = 'New York')

select brand_id from production.brands
where brand_name in ('Strider','Trek')

select product_name,list_price,category_id from production.products
order by product_name

select * from production.categories

select product_name,list_price, pro.category_id from production.products as pro
join production.categories as cat on pro.category_id = cat.category_id

-- poner espacio luego de unat tabla equivale a poner as
select product_name, order_id from production.products p
right join sales.order_items oi on p.product_id = oi.product_id

select product_name, order_id from production.products p
left join sales.order_items oi on p.product_id = oi.product_id

select product_name, order_id from production.products p
full outer join sales.order_items oi on p.product_id = oi.product_id

select product_name, order_id from production.products p
cross join sales.order_items as oi

exec sp_rename 'prueba.promociones','prueba.proms'

select * prueba.prueba.proms