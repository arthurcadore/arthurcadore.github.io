from pdf2image import convert_from_path
from PIL import Image
import numpy as np
import os

def pdf_to_png_compress(pdf_path, output_folder="./", dpi=150, scale=0.5, quality=70):
    """
    Converte PDF para PNG com redução de tamanho
    
    dpi: resolução da conversão (menor = menor tamanho)
    scale: fator de redimensionamento (0.5 = 50%)
    quality: compressão (0-100, menor = mais compressão)
    """
    
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    images = convert_from_path(pdf_path, dpi=dpi)

    for i, img in enumerate(images):
        new_size = (int(img.width * scale), int(img.height * scale))
        img_resized = img.resize(new_size, Image.LANCZOS)

        output_path = os.path.join(output_folder, f"page_{i+1}.jpeg")
        img_resized.save(output_path, "JPEG", optimize=True)
        print(f"Salvo: {output_path}")

def remove_white_background(input_path, output_path, threshold=240):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)

    r = data[:, :, 0]
    g = data[:, :, 1]
    b = data[:, :, 2]

    white_mask = (r > threshold) & (g > threshold) & (b > threshold)
    data[:, :, 3] = np.where(white_mask, 0, 255)
    result = Image.fromarray(data)
    result.save(output_path)

    print(f"Imagem salva em: {output_path}")


def png_to_ico(input_png, output_ico, sizes=[16, 32, 48, 64, 128, 256]):
    """
    Converte PNG para ICO com múltiplos tamanhos (ideal para favicon)
    """
    img = Image.open(input_png).convert("RGBA")

    img.save(
        output_ico,
        format='ICO',
        sizes=[(s, s) for s in sizes]
    )

    print(f"Arquivo ICO gerado: {output_ico}")


def crop_and_zoom(input_path, output_path, padding_ratio=0.1):
    """
    Remove margens transparentes e aplica um leve 'zoom'
    
    padding_ratio:
        0.0  → corte seco
        0.1  → ~10% de margem (equivalente a zoom ~110–120%)
    """

    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)

    alpha = data[:, :, 3]

    non_empty = np.where(alpha > 0)
    y_min, y_max = non_empty[0].min(), non_empty[0].max()
    x_min, x_max = non_empty[1].min(), non_empty[1].max()

    height = y_max - y_min
    width = x_max - x_min
    pad_y = int(height * padding_ratio)
    pad_x = int(width * padding_ratio)

    y_min = max(0, y_min - pad_y)
    y_max = min(data.shape[0], y_max + pad_y)
    x_min = max(0, x_min - pad_x)
    x_max = min(data.shape[1], x_max + pad_x)

    cropped = img.crop((x_min, y_min, x_max, y_max))
    cropped.save(output_path)

    print(f"Imagem cortada salva em: {output_path}")


def convert_to_white(input_path, output_path, preserve_alpha=True):
    """
    Converte todos os pixels coloridos para branco.
    
    preserve_alpha=True → mantém transparência (recomendado)
    """

    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)

    if preserve_alpha:
        alpha = data[:, :, 3]
        mask = alpha > 0  # apenas pixels visíveis
        data[mask, 0] = 255  # R
        data[mask, 1] = 255  # G
        data[mask, 2] = 255  # B
    else:
        data[:, :, 0:3] = 255

    result = Image.fromarray(data)
    result.save(output_path)
    print(f"Imagem convertida para branco: {output_path}")
    

# USO
# pdf_to_png_compress("argos-main.pdf", dpi=120, scale=0.6, quality=70)

# remove_white_background("logo.png", "logo.png", threshold=20)
# crop_and_zoom("logo.png", "logo2.png", padding_ratio=0.01)
# convert_to_white("logo2.png", "logo3.png", preserve_alpha=True)
# png_to_ico("logo3.png", "favicon.ico")

