use BikeStores
-- seleccionar productos del 2017
select *  from production.products
where model_year = 2017
--MOSTRAR PRODUCTOS EN UNA SOLA COLUMNA CON SU RESPECTIVO PRECIO Y AÑO
select CONCAT(product_name,' - ',model_year,' - ',list_price) as Producto from production.products
--MOSTRAR LOS PRODUCTOS CON MODELO PRECIOS 5299.99, 875.99, 189.99 
select product_name, list_price from production.products
where list_price = 5299.99 or list_price = 875.99 or list_price = 189.99
--MOSTRAR LOS PRODUCTOS QUE CONTENGAN EN SU NOMBRE "BICYCLE" Y
--TENGAN UN PRECIO MENOR A 500 Y MAYOR A 1000
select product_name,list_price from production.products
where product_name like '%bicycle%' and list_price >500 and list_price<1000

--MOSTRAR LAS CIUDADES DE LOS CLIENTES 
--DE LOS ESTADOS DE CALIFORNIA Y TEXAS
select distinct city from sales.customers
where state = 'CA' or state = 'TX'
order by city ASC

--MOSTRAR EL INVENTARIO DE UNA DE LAS TIENDAS
select * from production.stocks
where store_id =1

--MOSTRAR LAS VENTAS DEL VENDEDOR 3
select * from sales.orders
where staff_id = 3

--MOSTRAR LAS COMPRAS DE LOS CLIENTES QUE VIVEN EN LONGVIEW


select oi.product_id, oi.item_id, oi.quantity, oi.list_price, sales.customers.city from  sales.order_items as oi
inner join sales.orders on sales.orders.order_id=oi.order_id
inner join sales.customers on sales.customers.customer_id=sales.orders.customer_id
where sales.customers.city='longview'


--MOSTRAR EL CLIENTE CON MÁS COMPRAS

select * from sales.customers
select * from sales.orders
order by customer_id asc
insert into sales.orders values (1,4,'2016/01/01','2016/01/03','2016/01/03',1,2)

Select top 1 sales.customers.first_name, sales.customers.customer_id, COUNT(order_id) as venta
from sales.customers
inner join sales.orders on sales.customers.customer_id = sales.orders.customer_id
Group by sales.customers.customer_id, sales.customers.first_name
Order by 3 desc



--MOSTRAR EL VENDEDOR CON MÁS VENTAS

select * from sales.staffs
select * from sales.orders
order by customer_id asc

Select top 1 sales.staffs.first_name, sales.staffs.staff_id, COUNT(order_id) as venta
from sales.staffs
inner join sales.orders on sales.staffs.staff_id = sales.orders.customer_id
Group by sales.staffs.staff_id, sales.staffs.first_name
Order by 3 desc


--MOSTRAR EL NOMBRE DE PRODUCTO, LA CATEGORÍA Y LA MARCA DE UN PRODUCTO

select product_name, production.categories.category_name, production.brands.brand_name from production.products
inner join production.categories on production.categories.category_id=production.products.category_id
inner join production.brands on production.brands.brand_id=production.products.brand_id


--MOSTRAR EL SUPERVISOR DE LOS EMPLEADOS
select * from sales.staffs
select a.first_name, b.first_name as manager from sales.staffs as a
inner join sales.staffs as b on a.manager_id=b.staff_id

--MOSTRAR TODOS LOS PRODUCTOS CON SUS MARCAS

select product_name, production.brands.brand_name from production.products
inner join production.brands on production.brands.brand_id=production.products.brand_id


--MOSTRAR LOS DATOS LOS CLIENTES QUE 
--VIVEN EN UNA CIUDAD QUE TIENE UNA TIENDA
select * from sales.customers
select * from sales.stores

select sales.customers.*, sales.stores.store_name from sales.customers
inner join sales.stores on sales.stores.city=sales.customers.city