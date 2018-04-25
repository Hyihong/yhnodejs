CREATE TABLE IF NOT EXISTS `user`(
   `user_id` INT UNSIGNED AUTO_INCREMENT,
   `user_name` VARCHAR(40) NOT NULL,
   `user_password` VARCHAR(40) NOT NULL,
   PRIMARY KEY ( `user_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 初始化文章表
CREATE TABLE IF NOT EXISTS `article`(
    `article_id` VARCHAR(30) NOT NULL,
    `article_title` VARCHAR(30) NOT NULL,
    `article_content`  Text NOT NULL,
    `article_author`  VARCHAR(20) NOT NULL,
    `article_type`  INT NOT NULL,
    `create_time` DATETIME CURRENT_DATE,
    `last_eidt_time` DATETIME NOT NULL ,
    PRIMARY KEY ( `article_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 插入数据
INSERT IGNORE INTO `user` (user_id,user_name,user_password) VALUES( 1,'Hyihong','aptx4869' );

INSERT IGNORE INTO `user` (user_id,user_name,user_password) VALUES( 2,'Wbaichao','aptx4869' );