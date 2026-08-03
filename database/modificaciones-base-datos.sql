SET @col_exists := (
    SELECT COUNT(*) FROM information_schema.COLUMNS
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME = 'foto'
      AND COLUMN_NAME = 'eliminada'
);
SET @sql := IF(@col_exists = 0,
    'alter table foto add column eliminada TINYINT(1) not null default 0',
    'SELECT "eliminada ya existe" AS msg');
PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;

CREATE TABLE IF NOT EXISTS users (
    id                  int            auto_increment,
    username            varchar(80)    not null,
    password            varchar(255)   not null,
    role                varchar(20)    not null,
    primary key(id),
    unique key uq_users_username (username)
)
ENGINE = INNODB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE IF NOT EXISTS log (
    id                  int8           auto_increment,
    fecha               datetime       not null DEFAULT CURRENT_TIMESTAMP,
    mensaje             varchar(300)    not null,
    primary key(id)
)
ENGINE = INNODB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;
