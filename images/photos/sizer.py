from PIL import Image
import numpy as np
import pdb
import os

tn_size = 5e5
p_size = 1e6

def get_two_power(n):
    if n > 2:
        return 1 + get_two_power(n/2)
    else:
        return 1


kvs = []
for fname in os.listdir('./'):
    if fname.endswith('.jpg') and not fname.startswith('tn-'):
        print(fname)
        fsize = os.stat(fname).st_size

        im = Image.open(fname)
        l, w = im.size

        if fsize > tn_size:
            ratio = fsize / tn_size
            two_power = get_two_power(ratio)
            two_ratio = np.sqrt(2 ** two_power)
            
            new_l = int(l/two_ratio)
            new_w = int(w/two_ratio)

            im2 = im.resize((new_l, new_w))
            im2.save('thumbnails/tn-' + fname)
        else:
            im.save('thumbnails/tn-' + fname)

        if fsize > p_size:
            ratio = fsize / p_size
            two_power = get_two_power(ratio)
            two_ratio = np.sqrt(2 ** two_power)

            new_l = int(l/two_ratio)
            new_w = int(w/two_ratio)

            im3 = im.resize((new_l, new_w))
            im3.save(fname)
