USE [banco]
GO
/****** Object:  Schema [cajero]    Script Date: 17/4/2019 17:44:40 ******/
CREATE SCHEMA [cajero]
GO
/****** Object:  Table [cajero].[banco]    Script Date: 17/4/2019 17:44:40 ******/
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
/****** Object:  Table [cajero].[cajero]    Script Date: 17/4/2019 17:44:40 ******/
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
/****** Object:  Table [cajero].[cliente]    Script Date: 17/4/2019 17:44:40 ******/
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
/****** Object:  Table [cajero].[cuentas]    Script Date: 17/4/2019 17:44:40 ******/
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
/****** Object:  Table [cajero].[operaciones]    Script Date: 17/4/2019 17:44:40 ******/
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
/****** Object:  Table [cajero].[tarjeta]    Script Date: 17/4/2019 17:44:40 ******/
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
