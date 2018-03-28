
CREATE TABLE IF NOT EXISTS `article`(
   `article_id` INT UNSIGNED AUTO_INCREMENT,
   `article_title` TEXT NOT NULL,
   `article_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `article_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;