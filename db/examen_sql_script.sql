-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema l-commerce_anto_ssh
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `l-commerce_anto_ssh` ;

-- -----------------------------------------------------
-- Schema l-commerce_anto_ssh
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `l-commerce_anto_ssh` DEFAULT CHARACTER SET utf8mb3 ;
USE `l-commerce_anto_ssh` ;

-- -----------------------------------------------------
-- Table `l-commerce_anto_ssh`.`TipoMoneda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `l-commerce_anto_ssh`.`TipoMoneda` (
  `idTipoMoneda` INT NOT NULL AUTO_INCREMENT,
  `Descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipoMoneda`),
  UNIQUE INDEX `idTipoMoneda_UNIQUE` (`idTipoMoneda` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `l-commerce_anto_ssh`.`PlanSuscripciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `l-commerce_anto_ssh`.`PlanSuscripciones` (
  `idPlan` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  `Precio` INT NOT NULL,
  `Descricion` VARCHAR(250) NULL DEFAULT NULL,
  `idTipoMoneda` INT NOT NULL,
  PRIMARY KEY (`idPlan`),
  UNIQUE INDEX `idPeliculas_UNIQUE` (`idPlan` ASC) VISIBLE,
  INDEX `fk_idTipoMoneda_idx` (`idTipoMoneda` ASC) VISIBLE,
  CONSTRAINT `fk_idTipoMoneda`
    FOREIGN KEY (`idTipoMoneda`)
    REFERENCES `l-commerce_anto_ssh`.`TipoMoneda` (`idTipoMoneda`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `l-commerce_anto_ssh`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `l-commerce_anto_ssh`.`Users` (
  `username` VARCHAR(128) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `age` INT NOT NULL,
  `maidenName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `avatarURL` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `idUser_UNIQUE` (`idUser` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `l-commerce_anto_ssh`.`HistorialPagos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `l-commerce_anto_ssh`.`HistorialPagos` (
  `idHistorialPagos` INT NOT NULL AUTO_INCREMENT,
  `idUser` INT NOT NULL,
  `idPlan` INT NOT NULL,
  `fecha` DATETIME NOT NULL,
  PRIMARY KEY (`idHistorialPagos`),
  UNIQUE INDEX `idHistorialPagos_UNIQUE` (`idHistorialPagos` ASC) VISIBLE,
  INDEX `fk_idUser_idx` (`idUser` ASC) VISIBLE,
  INDEX `fk_idPlan_idx` (`idPlan` ASC) VISIBLE,
  CONSTRAINT `fk_idPlan`
    FOREIGN KEY (`idPlan`)
    REFERENCES `l-commerce_anto_ssh`.`PlanSuscripciones` (`idPlan`),
  CONSTRAINT `fk_idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `l-commerce_anto_ssh`.`Users` (`idUser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `l-commerce_anto_ssh`.`bt_suscriptores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `l-commerce_anto_ssh`.`bt_suscriptores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(60) NOT NULL,
  `apellido` VARCHAR(60) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `fecha_registro` DATETIME NOT NULL,
  `id_estado` INT NOT NULL,
  `telefono` VARCHAR(60) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
