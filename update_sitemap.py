import xml.etree.ElementTree as ET
from datetime import datetime

# Sitemap file ka path
sitemap_path = 'sitemap.xml'

# Current date ko required format mein laana
current_date = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S+00:00')

# XML sitemap ko parse karna
tree = ET.parse(sitemap_path)
root = tree.getroot()

# Har <url> tag ko find karna aur <lastmod> tag ko update karna
for url in root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
    lastmod = url.find('{http://www.sitemaps.org/schemas/sitemap/0.9}lastmod')
    if lastmod is not None:
        lastmod.text = current_date

# Updated sitemap ko file mein save karna
tree.write(sitemap_path)

print(f"Sitemap updated with lastmod: {current_date}")
