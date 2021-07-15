INSERT INTO tb_user (name, email, password) VALUES ('Bob', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Pedro', 'pedro@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Maria', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('João', 'joao@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('José', 'jose@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (5, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (6, 1);

INSERT INTO tb_genre (name) VALUES ('Aventura');
INSERT INTO tb_genre (name) VALUES ('Comédia');
INSERT INTO tb_genre (name) VALUES ('Ação');
INSERT INTO tb_genre (name) VALUES ('Infantil');
INSERT INTO tb_genre (name) VALUES ('Musical');
INSERT INTO tb_genre (name) VALUES ('Drama');
INSERT INTO tb_genre (name) VALUES ('Ficção');
INSERT INTO tb_genre (name) VALUES ('Documentário');
INSERT INTO tb_genre (name) VALUES ('Animação');
INSERT INTO tb_genre (name) VALUES ('Fantasia');
INSERT INTO tb_genre (name) VALUES ('Terror');

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('Viúva Negra', 'Ela cansou de fugir de seu passado.', 'Natasha Romanoff "Viúva Negra" precisa confrontar partes de sua história quando surge uma conspiração perigosa ligada ao seu passado. Perseguida por uma força que não irá parar até derrotá-la, Natasha terá que lidar com sua antiga vida de espiã, e também reencontrar membros de sua família que deixou para trás antes de se tornar parte dos Vingadores.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dq18nCTTLpy9PmtzZI6Y2yAgdw5.jpg', 1);

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('Velozes & Furiosos: Hobbs & Shaw', 'Muita ação, adrenalina e pancadaria.', 'Desde que se conheceram, em "Velozes & Furiosos 7", Luke Hobbs (Dwayne Johnson) e Deckard Shaw (Jason Statham) constantemente bateram de frente, não só por inicialmente estarem em lados opostos mas, especialmente, pela personalidade de cada um. Agora, a dupla precisa unir forças para enfrentar Brixton (Idris Elba), um anarquista alterado geneticamente que se tornou uma ameaça biológica global. Para tanto, eles contam com a ajuda de Hattie (Vanessa Kirby), irmã de Shaw, que é também agente do MI6, o serviço secreto britânico.', 2019, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg', 1);

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('O Poderoso Chefinho 2: Negócios da Família', 'O recesso acabou.', 'Tim Templeton e seu irmão mais novo Ted, o famoso Boss Baby, tornaram-se adultos, vivem por conta própria, Tim se tornou um homem de família organizado e Ted é o chefe de um grande fundo especulativo. Mas a chegada de um novo Boss Baby, com uma abordagem totalmente nova e estratégia inovadora, está prestes a unir os irmãos inimigos ... e inspirar um novo modelo nos assuntos familiares. Tim e sua esposa Carole moram no subúrbio, onde ele cuida da casa enquanto ela cozinha a panela. Eles têm dois filhos: Tabitha, uma menina de 7 anos extremamente inteligente, e Tina, sua adorável recém-nascida. Tabitha, a primeira da classe em uma escola para superdotados, adora o tio Ted e sonha em seguir seus passos, o que preocupa muito Tim, que teme perder a infância por trabalhar tanto.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpg', 2);

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('Velozes & Furiosos 9', 'Todos os caminhos levam a isso', 'Dominic Toretto e sua família precisam enfrentar o seu irmão mais novo Jakob, um assassino mortal que está trabalhando com uma antiga inimiga, a cyber-terrorista Cipher.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/lYvx6ESVPTsRHtsLba2TN3Larvo.jpg', 3);

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('Pedro Coelho 2: O Fugitivo', 'The garden was just the beginning.', 'Bea, Thomas e os coelhos construíram uma familia improvisada. Quando o coelho arteiro decide se aventurar para além do jardim, encontra um mundo onde não é mais o protagonista rebelde e suas travessuras não são admiráveis. Agora, sua familia arrisca tudo para conseguir achá-lo, enqunato ele encara uma jornada de autoconhecimento.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/5HjzYTihkH7EvOWSE7KcsF6pBMM.jpg', 4);

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('Um Lugar Silencioso - Parte II', 'Apenas o silêncio não será suficiente.', 'Logo após os acontecimentos mortais, até mesmo dentro de casa, a família Abbott precisa agora encarar o terror mundo afora, continuando a lutar para sobreviver em silêncio. Obrigados a se aventurar pelo desconhecido, eles rapidamente percebem que as criaturas que caçam pelo som não são as únicas ameaças que os observam pelo caminho de areia.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/z2UtGA1WggESspi6KOXeo66lvLx.jpg', 11);

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('Space Jam: Um Novo Legado', 'O Jogo do Século.', 'O superastro do basquete LeBron James se junta à gangue Looney Tunes para derrotar o Goon Squad e salvar seu filho.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/i49hxtPu0HJvXj1Tzdbkm96bs3e.jpg', 9);

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('Uma Noite de Crime 5: A Fronteira', 'As Regras Foram Quebradas.', 'A trama se passará após os eventos de ‘O Ano da Eleição’ e será focada em Adela (Ana de la Reguera) e Juan (Tenoch Huerta), que encontram abrigo em um rancho no Texas, após fugirem de um cartel no México. As coisas dão errado quando um grupo de forasteiros decide continuar purgando além do tempo concedido, quando as pessoas podem violar todas e quaisquer leis.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/oUKvDUcs7f5rOjYsJBZl1VD4ZLF.jpg', 11);

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('Dupla Explosiva 2 - E a Primeira-Dama do Crime', 'Ménage à trois assassino.', 'O casal estranho mais letal do mundo - o guarda-costas Michael Bryce e o assassino de aluguel Darius Kincaid - está de volta em outra missão com risco de vida. Ainda sem licença e sob escrutínio, Bryce é forçado a entrar em ação pela esposa ainda mais volátil de Darius, a infame vigarista internacional Sonia Kincaid. Enquanto Bryce é levado ao limite por seus dois protegidos mais perigosos, o trio se mete em uma trama global e logo descobre que eles são tudo o que se interpõe entre a Europa e um louco vingativo e poderoso.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/y0PkTKto4ruPREmQf5yspkHBpYk.jpg', 3);

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('Em um Bairro de Nova York', 'Agora é a hora.', 'As luzes se acendem em Washington Heights... O cheirinho de um cafecito caliente paira no ar, na saída da estação de metrô da Rua 181, onde um caleidoscópio de sonhos mobiliza essa comunidade vibrante e muito unida. No meio de tudo, temos o querido e magnético dono de uma mercearia, Usnavi, que economiza cada centavo do seu dia de trabalho enquanto torce, imagina e canta sobre uma vida melhor.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/uEJuqp08dH6IQwZJGASlPZOXqKu.jpg', 6);

INSERT INTO tb_movie (title, sub_title, synopsis, year, img_url, genre_id) VALUES ('Escape Room 2: Tensão Máxima', 'Vencer Foi Apenas O Começo...', 'Seis pessoas inconscientemente se encontram trancadas em outra série de salas de fuga, lentamente descobrindo o que têm em comum para sobreviver, enquanto descobrem todos os jogos que jogaram antes.', 2021, 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/dsdbViTNjLu4DbgkkYmuY4xDQ20.jpg', 11);

INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Muito bom', 1, 2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Mais ou menos', 1, 2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Muito chato', 1, 2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Muito bom', 2, 2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Mais ou menos', 2, 2);
INSERT INTO TB_REVIEW (TEXT, MOVIE_ID, USER_ID) VALUES ('Muito chato', 3, 2);
