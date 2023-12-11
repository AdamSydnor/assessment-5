Query 1:
SELECT email FROM customers ORDER BY email;

Query 2:
SELECT id FROM orders WHERE customer_id = (SELECT id FROM customers WHERE fname = 'Elizabeth' AND lname = 'Crocker');

Query 3:
SELECT SUM(num_cupcakes) FROM orders WHERE processed = false;

Query 4:
SELECT name, SUM(num_cupcakes) AS sum FROM cupcakes FULL OUTER JOIN orders ON cupcakes.id = orders.cupcake_id GROUP BY name ORDER BY name;

Query 5:
SELECT email, SUM(num_cupcakes) FROM customers JOIN orders ON customers.id = orders.customer_id GROUP BY email ORDER BY email;

Query 6:
