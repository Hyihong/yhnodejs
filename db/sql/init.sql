
CREATE TABLE IF NOT EXISTS `user`(
   `user_id` INT UNSIGNED AUTO_INCREMENT,
   `user_name` VARCHAR(40) NOT NULL,
   `user_password` VARCHAR(40) NOT NULL,
   PRIMARY KEY ( `user_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 插入数据
INSERT INTO `user` (user_id,user_name,user_password) VALUES( 1,'Hyihong','aptx4869' );

INSERT INTO `user` (user_id,user_name,user_password) VALUES( 2,'Wbaichao','aptx4869' );
