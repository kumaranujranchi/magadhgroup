import os
import re
from PIL import Image

def convert_images_to_webp(root_dirs, exclude_names):
    converted_count = 0
    
    for base_dir in root_dirs:
        for root, dirs, files in os.walk(base_dir):
            if 'node_modules' in dirs:
                dirs.remove('node_modules')
            if 'build' in dirs:
                dirs.remove('build')
                
            for file in files:
                ext = os.path.splitext(file)[1].lower()
                if ext in ('.png', '.jpg', '.jpeg'):
                    if file in exclude_names:
                        print(f"Skipping excluded file: {file}")
                        continue
                        
                    src_path = os.path.join(root, file)
                    dest_file = file + '.webp'
                    dest_path = src_path + '.webp'
                    
                    try:
                        with Image.open(src_path) as img:
                            # Convert CMYK or Palette images to RGB/RGBA so they can be saved to WebP
                            if img.mode == 'CMYK':
                                img = img.convert('RGB')
                            elif img.mode == 'P':
                                img = img.convert('RGBA')
                                
                            img.save(dest_path, 'webp', quality=82)
                        
                        converted_count += 1
                        print(f"Converted & optimized (original kept): {file} -> {dest_file}")
                    except Exception as e:
                        print(f"Error converting {src_path}: {e}")
                        
    return converted_count

def update_references(root_dirs, code_extensions):
    # Regex to find references to image files (png, jpg, jpeg) that are not already followed by .webp
    pattern = re.compile(r'([\b\w\-\./]+)\.(png|jpg|jpeg)\b(?!\.webp)', re.IGNORECASE)
    updated_count = 0
    
    for base_dir in root_dirs:
        for root, dirs, files in os.walk(base_dir):
            if 'node_modules' in dirs:
                dirs.remove('node_modules')
            if 'build' in dirs:
                dirs.remove('build')
                
            for file in files:
                if file.endswith(code_extensions):
                    filepath = os.path.join(root, file)
                    try:
                        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
                            content = f.read()
                        
                        # Apply regex replacement
                        new_content, count = pattern.subn(r'\1.\2.webp', content)
                        
                        if count > 0:
                            with open(filepath, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            updated_count += 1
                            print(f"Updated {count} references in: {filepath}")
                    except Exception as e:
                        print(f"Error processing {filepath}: {e}")
                        
    return updated_count

if __name__ == '__main__':
    project_dir = '/Volumes/Crucial X9/Code/magadhgroup-website/main-file'
    src_dir = os.path.join(project_dir, 'src')
    public_dir = os.path.join(project_dir, 'public')
    
    code_exts = ('.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.html', '.md', '.json')
    exclude = {'favicon.ico', 'favicon.png', 'logo192.png', 'logo512.png'}
    
    print("Starting WebP image conversion (preserving originals)...")
    num_converted = convert_images_to_webp([src_dir, public_dir], exclude)
    print(f"Successfully converted {num_converted} images to WebP.")
    
    print("\nUpdating reference strings in code files...")
    num_updated = update_references([src_dir, public_dir], code_exts)
    print(f"Successfully updated references in {num_updated} code files.")
    print("Optimization Complete!")
