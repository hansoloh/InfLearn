SELECT t1.*, t2.category1, t2.category2, t2.category3, t3.path
FROM t_product t1, t_category t2, t_image t3
WHERE t1.category_id = t2.id AND t1.id = t3.product_id AND t3.`type`=2;

INSERT INTO t_product (product_name, product_price, delivery_price, add_delivery_price, tags, outbound_days, seller_id, category_id)
VALUES ('test1',555,2300,5678,'test',3,1,1);
