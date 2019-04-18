UPDATE product 
set description = $1  -- 1 is column, 2 is new value
where product_id = $2 -- you could do another placeholder for product id? 
