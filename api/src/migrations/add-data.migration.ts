import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertClothingItems implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO clothing_item (id, name, brand, type, min_temp, max_temp, color, suitable_weather, image_link)
      VALUES
        (1, 'Adidas Track Pants', 'Adidas', 'bottom', 40, 70, 'Black', 'cool,cloudy', 'https://example.com/adidas-track-pants.jpg'),
        (2, 'Nike Dri-FIT Shirt', 'Nike', 'top', 60, 100, 'White', 'warm,hot', 'https://example.com/nike-dri-fit-shirt.jpg'),
        (3, 'Carhartt Jacket', 'Carhartt', 'top', 20, 50, 'Brown', 'cold,snow', 'https://example.com/carhartt-jacket.jpg'),
        (4, 'Timberland Boots', 'Timberland', 'shoes', 10, 60, 'Tan', 'cold,snow,rain', 'https://example.com/timberland-boots.jpg'),
        (5, 'Under Armour Cap', 'Under Armour', 'hat', 50, 100, 'Blue', 'warm', 'https://example.com/under-armour-cap.jpg'),
        (6, 'Levi''s 501 Jeans', 'Levi''s', 'bottom', 40, 80, 'Blue', 'cool,cloudy,warm', 'https://example.com/levis-501-jeans.jpg'),
        (7, 'North Face Down Jacket', 'The North Face', 'top', -10, 40, 'Black', 'cold,snow', 'https://example.com/north-face-down-jacket.jpg'),
        (8, 'Columbia Waterproof Pants', 'Columbia', 'bottom', 30, 60, 'Gray', 'rain,cold', 'https://example.com/columbia-waterproof-pants.jpg'),
        (9, 'Patagonia Nano Puff Jacket', 'Patagonia', 'top', 30, 50, 'Green', 'cold,windy', 'https://example.com/patagonia-nano-puff.jpg'),
        (10, 'Ray-Ban Aviator Sunglasses', 'Ray-Ban', 'accessory', 50, 100, 'Gold', 'sunny', 'https://example.com/ray-ban-aviator.jpg'),
        (11, 'Hanes Thermal Shirt', 'Hanes', 'top', 20, 40, 'White', 'cold', 'https://example.com/hanes-thermal-shirt.jpg'),
        (12, 'Sorel Snow Boots', 'Sorel', 'shoes', -10, 30, 'Brown', 'snow,cold', 'https://example.com/sorel-snow-boots.jpg'),
        (13, 'Converse Chuck Taylor Sneakers', 'Converse', 'shoes', 60, 100, 'White', 'warm,hot', 'https://example.com/converse-chuck-taylor.jpg'),
        (14, 'Puma Athletic Shorts', 'Puma', 'bottom', 70, 100, 'Black', 'hot', 'https://example.com/puma-athletic-shorts.jpg'),
        (15, 'H&M Linen Shirt', 'H&M', 'top', 70, 100, 'Beige', 'warm,hot', 'https://example.com/hm-linen-shirt.jpg'),
        (16, 'Gucci Scarf', 'Gucci', 'accessory', 20, 50, 'Red', 'cold,windy', 'https://example.com/gucci-scarf.jpg'),
        (17, 'Gap Windbreaker', 'Gap', 'top', 50, 70, 'Blue', 'cool,windy', 'https://example.com/gap-windbreaker.jpg'),
        (18, 'Nike Zoom Running Shoes', 'Nike', 'shoes', 60, 100, 'Black', 'warm,hot', 'https://example.com/nike-zoom-running-shoes.jpg'),
        (19, 'Adidas Hoodie', 'Adidas', 'top', 40, 60, 'Gray', 'cool,cloudy', 'https://example.com/adidas-hoodie.jpg'),
        (20, 'Uniqlo Heattech Leggings', 'Uniqlo', 'bottom', 20, 50, 'Black', 'cold', 'https://example.com/uniqlo-heattech-leggings.jpg'),
        (21, 'Zara Lightweight Blazer', 'Zara', 'top', 60, 80, 'Navy', 'warm,cloudy', 'https://example.com/zara-lightweight-blazer.jpg'),
        (22, 'Champion Sweatpants', 'Champion', 'bottom', 40, 70, 'Gray', 'cool,cloudy', 'https://example.com/champion-sweatpants.jpg'),
        (23, 'Vans Slip-On Shoes', 'Vans', 'shoes', 60, 100, 'Black', 'warm,hot', 'https://example.com/vans-slip-on.jpg'),
        (24, 'Herschel Backpack', 'Herschel', 'accessory', 50, 100, 'Black', 'sunny,warm', 'https://example.com/herschel-backpack.jpg');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM clothing_item WHERE id BETWEEN 1 AND 24;
    `);
  }
}
