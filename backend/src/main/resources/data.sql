INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre (name) VALUES ('Aventura');
INSERT INTO tb_genre (name) VALUES ('Comédia');
INSERT INTO tb_genre (name) VALUES ('Ação');
INSERT INTO tb_genre (name) VALUES ('Infantil');
INSERT INTO tb_genre (name) VALUES ('Musical');
INSERT INTO tb_genre (name) VALUES ('Drama');
INSERT INTO tb_genre (name) VALUES ('Ficção');
INSERT INTO tb_genre (name) VALUES ('Documentário');

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('01.Raya e o Último Dragão', 'Raya e o Último Dragão subtitle', 'Raya e o Último Dragão acompanha a jovem que dá nome ao filme em uma aventura para salvar sua cidade e família.', 2010, 'https://youtu.be/PH-bg9b-PSE', 1);
INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('02.Raya e o Último Dragão', 'Raya e o Último Dragão subtitle', 'Raya e o Último Dragão acompanha a jovem que dá nome ao filme em uma aventura para salvar sua cidade e família.', 2010, 'https://youtu.be/PH-bg9b-PSE', 1);
INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('03.Raya e o Último Dragão', 'Raya e o Último Dragão subtitle', 'Raya e o Último Dragão acompanha a jovem que dá nome ao filme em uma aventura para salvar sua cidade e família.', 2010, 'https://youtu.be/PH-bg9b-PSE', 2);
INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('04.Raya e o Último Dragão', 'Raya e o Último Dragão subtitle', 'Raya e o Último Dragão acompanha a jovem que dá nome ao filme em uma aventura para salvar sua cidade e família.', 2010, 'https://youtu.be/PH-bg9b-PSE', 2);
INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('05.Raya e o Último Dragão', 'Raya e o Último Dragão subtitle', 'Raya e o Último Dragão acompanha a jovem que dá nome ao filme em uma aventura para salvar sua cidade e família.', 2010, 'https://youtu.be/PH-bg9b-PSE', 3);
INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('06.Raya e o Último Dragão', 'Raya e o Último Dragão subtitle', 'Raya e o Último Dragão acompanha a jovem que dá nome ao filme em uma aventura para salvar sua cidade e família', 2010, 'https://youtu.be/PH-bg9b-PSE', 3);
INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('07.Raya e o Último Dragão', 'Raya e o Último Dragão subtitle', 'Raya e o Último Dragão acompanha a jovem que dá nome ao filme em uma aventura para salvar sua cidade e família', 2010, 'https://youtu.be/PH-bg9b-PSE', 4);
INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('08.Raya e o Último Dragão', 'Raya e o Último Dragão subtitle', 'Raya e o Último Dragão acompanha a jovem que dá nome ao filme em uma aventura para salvar sua cidade e família.', 2010, 'https://youtu.be/PH-bg9b-PSE', 5);
INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('09.Raya e o Último Dragão', 'Raya e o Último Dragão subtitle', 'Raya e o Último Dragão acompanha a jovem que dá nome ao filme em uma aventura para salvar sua cidade e família.', 2010, 'https://youtu.be/PH-bg9b-PSE', 7);
INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('10.Raya e o Último Dragão', 'Raya e o Último Dragão subtitle', 'Raya e o Último Dragão acompanha a jovem que dá nome ao filme em uma aventura para salvar sua cidade e família.', 2010, 'https://youtu.be/PH-bg9b-PSE', 7);

