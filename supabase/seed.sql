-- Insert agent data
INSERT INTO agents (id, name, email, phone, image_url, bio, specialization) VALUES
(
    '123e4567-e89b-12d3-a456-426614174000',
    'Sushil Bhardwaj',
    'sushil@mydreamhome.com',
    '+1 (416) 555-0123',
    'https://dtzulyujzhqiu.cloudfront.net/remaximpactrealty6806/profiles/1735247210_1300381.jpg',
    'With over 15 years of experience in Toronto real estate, Sushil Bhardwaj has helped hundreds of families find their dream homes. Specializing in luxury properties and family homes across the Greater Toronto Area.',
    'Luxury Homes, Family Residences, Investment Properties'
);

-- Insert areas data
INSERT INTO areas (name, description, image_url, properties_count) VALUES
('Downtown Toronto', 'Luxury condos and modern apartments in the heart of the city', 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&q=80', 150),
('North York', 'Family-friendly neighborhoods with excellent schools', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80', 89),
('Scarborough', 'Diverse communities with beautiful natural surroundings', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80', 76),
('Etobicoke', 'Waterfront properties and peaceful suburban living', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80', 65),
('Mississauga', 'Modern urban development with great amenities', 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80', 92);

-- Insert properties data
INSERT INTO properties (
    id,
    title,
    description,
    price,
    status,
    property_type,
    bedrooms,
    bathrooms,
    square_feet,
    location_address,
    city,
    postal_code,
    featured,
    agent_id
) VALUES
(
    '123e4567-e89b-12d3-a456-426614174001',
    'Luxury Villa',
    'Experience luxury living at its finest in this stunning villa located in the heart of Downtown Toronto. This magnificent property offers breathtaking views of the city skyline and features premium finishes throughout.',
    1250000.00,
    'for_sale',
    'villa',
    4,
    3,
    2500.00,
    '123 Luxury Lane',
    'Toronto',
    'M5V 2T6',
    true,
    '123e4567-e89b-12d3-a456-426614174000'
),
(
    '123e4567-e89b-12d3-a456-426614174002',
    'Modern Apartment',
    'Stunning modern apartment with open concept design and high-end finishes. Perfect for urban professionals seeking luxury and convenience in North York.',
    750000.00,
    'for_sale',
    'apartment',
    2,
    2,
    1200.00,
    '456 Urban Ave',
    'North York',
    'M2N 0A4',
    true,
    '123e4567-e89b-12d3-a456-426614174000'
),
(
    '123e4567-e89b-12d3-a456-426614174003',
    'Family Home',
    'Beautiful family home in a quiet neighborhood of Mississauga. Features a spacious backyard, modern kitchen, and plenty of natural light throughout.',
    950000.00,
    'for_sale',
    'house',
    3,
    2,
    1800.00,
    '789 Family Circle',
    'Mississauga',
    'L5B 2C9',
    true,
    '123e4567-e89b-12d3-a456-426614174000'
);

-- Insert property images
INSERT INTO property_images (property_id, image_url, is_primary, display_order) VALUES
('123e4567-e89b-12d3-a456-426614174001', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', true, 1),
('123e4567-e89b-12d3-a456-426614174001', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', false, 2),
('123e4567-e89b-12d3-a456-426614174001', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', false, 3),

('123e4567-e89b-12d3-a456-426614174002', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', true, 1),
('123e4567-e89b-12d3-a456-426614174002', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', false, 2),
('123e4567-e89b-12d3-a456-426614174002', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', false, 3),

('123e4567-e89b-12d3-a456-426614174003', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', true, 1),
('123e4567-e89b-12d3-a456-426614174003', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', false, 2),
('123e4567-e89b-12d3-a456-426614174003', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', false, 3);

-- Insert property amenities
INSERT INTO property_amenities (property_id, name) VALUES
('123e4567-e89b-12d3-a456-426614174001', 'Swimming Pool'),
('123e4567-e89b-12d3-a456-426614174001', 'Home Theater'),
('123e4567-e89b-12d3-a456-426614174001', 'Wine Cellar'),
('123e4567-e89b-12d3-a456-426614174001', 'Smart Home System'),
('123e4567-e89b-12d3-a456-426614174001', 'Private Elevator'),
('123e4567-e89b-12d3-a456-426614174001', 'Rooftop Terrace'),

('123e4567-e89b-12d3-a456-426614174002', 'Fitness Center'),
('123e4567-e89b-12d3-a456-426614174002', 'Concierge Service'),
('123e4567-e89b-12d3-a456-426614174002', 'Parking Space'),
('123e4567-e89b-12d3-a456-426614174002', 'Balcony'),
('123e4567-e89b-12d3-a456-426614174002', 'Pet Friendly'),
('123e4567-e89b-12d3-a456-426614174002', 'Storage Unit'),

('123e4567-e89b-12d3-a456-426614174003', 'Large Backyard'),
('123e4567-e89b-12d3-a456-426614174003', 'Modern Kitchen'),
('123e4567-e89b-12d3-a456-426614174003', 'Home Office'),
('123e4567-e89b-12d3-a456-426614174003', 'Garage'),
('123e4567-e89b-12d3-a456-426614174003', 'Central AC'),
('123e4567-e89b-12d3-a456-426614174003', 'Security System'); 