USE [banco]
GO
/****** Object:  Schema [cajero]    Script Date: 17/4/2019 17:43:37 ******/
CREATE SCHEMA [cajero]
GO
/****** Object:  Table [cajero].[banco]    Script Date: 17/4/2019 17:43:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cajero].[banco](
	[nroBanco] [int] NOT NULL,
	[nombre] [varchar](45) NOT NULL,
	[Direccion] [varchar](100) NOT NULL,
	[telefono] [varchar](11) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[nroBanco] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [cajero].[cajero]    Script Date: 17/4/2019 17:43:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cajero].[cajero](
	[idCajero] [int] NOT NULL,
	[nroBanco] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idCajero] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [cajero].[cliente]    Script Date: 17/4/2019 17:43:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cajero].[cliente](
	[DNI] [varchar](8) NOT NULL,
	[Nombre] [varchar](45) NULL,
	[Apellido] [varchar](45) NULL,
	[clave] [varchar](4) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[DNI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [cajero].[cuentas]    Script Date: 17/4/2019 17:43:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cajero].[cuentas](
	[NroCuenta] [varchar](10) NOT NULL,
	[monto] [money] NOT NULL,
	[moneda] [varchar](1) NOT NULL,
	[clienteDNI] [varchar](8) NOT NULL,
	[idTarjeta] [varchar](45) NOT NULL,
	[nroBanco] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[NroCuenta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [cajero].[operaciones]    Script Date: 17/4/2019 17:43:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cajero].[operaciones](
	[idoperacion] [int] IDENTITY(1,1) NOT NULL,
	[NroCuenta] [varchar](10) NOT NULL,
	[idCajero] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idoperacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [cajero].[tarjeta]    Script Date: 17/4/2019 17:43:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [cajero].[tarjeta](
	[idTarjeta] [varchar](45) NOT NULL,
	[clienteDNI] [varchar](8) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[idTarjeta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [cajero].[banco] ([nroBanco], [nombre], [Direccion], [telefono]) VALUES (1, N'el amigo', N'av. los palotes 534', N'987654321')
INSERT [cajero].[cajero] ([idCajero], [nroBanco]) VALUES (1, 1)
INSERT [cajero].[cliente] ([DNI], [Nombre], [Apellido], [clave]) VALUES (N'12345678', N'Marco', N'Polo', N'9876')
INSERT [cajero].[cliente] ([DNI], [Nombre], [Apellido], [clave]) VALUES (N'71787798', N'Joel', N'Valdez', N'1998')
INSERT [cajero].[cliente] ([DNI], [Nombre], [Apellido], [clave]) VALUES (N'74569873', N'Angelica', N'Jalixto', N'1997')
INSERT [cajero].[cliente] ([DNI], [Nombre], [Apellido], [clave]) VALUES (N'76098767', N'Luisa', N'Lane', N'1999')
INSERT [cajero].[cliente] ([DNI], [Nombre], [Apellido], [clave]) VALUES (N'77797877', N'Juan', N'Perez', N'1995')
INSERT [cajero].[cliente] ([DNI], [Nombre], [Apellido], [clave]) VALUES (N'78098765', N'Luis', N'Rodriguez', N'1994')
INSERT [cajero].[cliente] ([DNI], [Nombre], [Apellido], [clave]) VALUES (N'78789898', N'Maria', N'Juana', N'1990')
INSERT [cajero].[cliente] ([DNI], [Nombre], [Apellido], [clave]) VALUES (N'87654321', N'Jose', N'Kelvin', N'1234')
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'1232346789', 1200.0000, N'd', N'78789898', N'455784791234', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'1234456890', 9460.0000, N's', N'87654321', N'452729012334', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'1234523890', 90345.0000, N'd', N'12345678', N'412739903434', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'1234567454', 980.0000, N's', N'78098765', N'475705902976', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'1234567890', 90099.0000, N's', N'71787798', N'455789901234', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'1237907890', 3499.0000, N's', N'76098767', N'455726791234', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'1238768995', 6490.0000, N's', N'71787798', N'455789912356', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'1278667890', 5675.0000, N'd', N'74569873', N'451234991234', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'1298797890', 8234.0000, N's', N'12345678', N'412743533434', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'4556789091', 345.0000, N'd', N'77797877', N'415189401538', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'8734597790', 2345.0000, N's', N'78789898', N'423454791234', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'9594567890', 8772.0000, N'd', N'87654321', N'452729078994', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'9834868690', 8971.0000, N's', N'76098767', N'455721235234', 1)
INSERT [cajero].[cuentas] ([NroCuenta], [monto], [moneda], [clienteDNI], [idTarjeta], [nroBanco]) VALUES (N'9842567890', 7889.0000, N'd', N'74569873', N'451234578974', 1)
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'412739903434', N'12345678')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'412743533434', N'12345678')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'415189401538', N'77797877')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'423454791234', N'78789898')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'451234578974', N'74569873')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'451234991234', N'74569873')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'452729012334', N'87654321')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'452729078994', N'87654321')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'455721235234', N'76098767')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'455726791234', N'76098767')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'455784791234', N'78789898')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'455789901234', N'71787798')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'455789912356', N'71787798')
INSERT [cajero].[tarjeta] ([idTarjeta], [clienteDNI]) VALUES (N'475705902976', N'78098765')
ALTER TABLE [cajero].[cliente] ADD  DEFAULT ((1234)) FOR [clave]
GO
ALTER TABLE [cajero].[cajero]  WITH CHECK ADD FOREIGN KEY([nroBanco])
REFERENCES [cajero].[banco] ([nroBanco])
GO
ALTER TABLE [cajero].[cuentas]  WITH CHECK ADD FOREIGN KEY([clienteDNI])
REFERENCES [cajero].[cliente] ([DNI])
GO
ALTER TABLE [cajero].[cuentas]  WITH CHECK ADD FOREIGN KEY([idTarjeta])
REFERENCES [cajero].[tarjeta] ([idTarjeta])
GO
ALTER TABLE [cajero].[cuentas]  WITH CHECK ADD FOREIGN KEY([nroBanco])
REFERENCES [cajero].[banco] ([nroBanco])
GO
ALTER TABLE [cajero].[operaciones]  WITH CHECK ADD FOREIGN KEY([idCajero])
REFERENCES [cajero].[cajero] ([idCajero])
GO
ALTER TABLE [cajero].[operaciones]  WITH CHECK ADD FOREIGN KEY([NroCuenta])
REFERENCES [cajero].[cuentas] ([NroCuenta])
GO
ALTER TABLE [cajero].[tarjeta]  WITH CHECK ADD FOREIGN KEY([clienteDNI])
REFERENCES [cajero].[cliente] ([DNI])
GO
