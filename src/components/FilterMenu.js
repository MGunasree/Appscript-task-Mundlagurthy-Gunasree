import React, { useState, useEffect, useRef, useCallback } from 'react';
const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Backpack', price: '$50', image: 'https://m.media-amazon.com/images/I/51DVNSbWIRL._SX679_.jpg' },
    { id: 2, name: 'Toy', price: '$20', image: 'https://media.istockphoto.com/id/115461651/photo/toy-dragon.jpg?s=612x612&w=0&k=20&c=rq8xSIIV6YQmAdvHD4J6RyuPH21kkpBKrGiH9wqIPPw=' },
    { id: 3, name: 'Shoes', price: '$75', image: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg' },
    { id: 4, name: 'Hat', price: '$30', image: 'https://media.istockphoto.com/id/1453988945/photo/yellow-bucket-hat-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Dwt6ToZZBqfZOiHj7S4lNZfBx4CsPM9_WEa8e4SPZC8=' },
    { id: 5, name: 'Sunglasses', price: '$90', image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBBwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAEDBQYCBwj/xABEEAACAQMCAwUGBAMFBQkBAAABAgMABBEFIRIxUQYTIkFhFDJxgZGhQlKxwSOy0QczcoLhFSRiovA0NUNFU1RzdPEW/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EAC0RAAICAQMDBAECBwEAAAAAAAABAhEDBBIhEzFBBSIyUWGBsRVCUnGRofAU/9oADAMBAAIRAxEAPwDe0s02aWasMo4NPTClQSHzT1zT0gHpUqVAD0qbNLNJsY+afNc5pZpWB1Sps0s0hj09c0s0WB1SpqVIY9KmpUAPSpUqQx6VNSoA6zSzTUhSYD0qWaWaAFSpZpZoAelTZpUDHpU1KgAXI60sjrVcLiuvaK0bWZt6LHI60s1Xi4pxcetLax7kWApUCLjqaf2j1pNMe5BuaWaBNxjm1M91wqSTy8yaTTQ7QaTXJfFVyXhn2tw83/xIX/lBqYQag24spwvVwE/mIqDmkWKLYX3gpcY60yabeNHxcCg/lMi/1oeS3vot2s58dVQv/LmodQk4MMDCugRVT7ciHDkIc4IdgCPkaJW6BOBz89+VSTTI1QfSoUXCiuhMKdCtBFPUHfCukkDsF60hktKuZSI/Oo++WjuN8E1KohKtP3q0gJaVcCRafjWlYHVPXCsC2K7bwjeix0KlXPEvWlxL1oA6pU2QeRpZoAenzXOR1p6AHpUqVA7MiHPUU/edKBEm/vVIGPUV19py9wWJW89qfvT1oTLU+TjnUdqDcFd9vjzp0meSQRQo0suM8CcwOp6D1ND2sE15OIIWVGIy0jjwxr5sf6VZFoYozbWgZYAfEze/Merf05VRknXtiuS/HG1ul2OooQGHfTksOaQeXxc7fQGjLe1iyCsMSuOTuveMvzfOPkBQ8KZ5j61Z245Vhywf8zNmKUa4VB0MXef3ryyA8w8hIP8Al5farWztoUHghjX/AAqBVdbeVWtsdqpjHkvbZPwjGMbdKFuNPtJMsbWEt+buxn686Lpm5Ve1wRVmfvdMidMGWXhVg3DM3fLkctpOLHyxVNqdjdHx8RBHN4UDAj/A+cf5WrWzDpQMi86ocLLFJmND3sShv91uYy3Crxlo848iDxYb02rtLzzkt5QOqspq41PTWcPcWiAzEYkhY4S4X8rdD0bmPUZFZqSYDhkt+JoJRxISMHoVYeTAggjrWnClN7XwZc1xW5K0WYuYj5yr8Y/9a6WePO0vD6lSKqDd1DdakIImcoWbkka83Y8gPiaulhpW5fsULLbpR/cu7i7iTh4rjiZtlRVJZz0A86MWymaNXw0bHnHINx9KJ0HR2062E14RJqMgzLIPwf8AAvQD70eyY5CsdycuHwbHCKXbkqDbOoJxI3+FR/Wh+8XfgcMVOGXGGX4g7irwIOWBVb2gs3ltTd2qBry3UsoHOVBu0Z9CM46HBqzdXJDYnwDCX1p+99aro7uKRVdDxI4DKeoO4NSiVD51q6aZj3tcByz8LZB3rp7kvzNA96nWl3idaXSQ1kYaJfWn731oLvV60u+FLpIOoG9760u9PWhO9FOJFPnS6SDqBffHrT98etCcS9aXGPzUumiXUYYJz1pUKGHWlS6Y+oYJbuT8W1SLeMN6s5YId9qHnS1t4GlnkWONR4mY4ArqblRirmjmO+PnUq6grELjmcVmo9Rn1i8a17M2yzyZ4RNMeFPpT6N2e7Ty9o4U1Jn7m2nBuEilC8IHLYYyCcVlyavFC15NWPR5J8vsej2yezaTEV/vLw8bH/gGyj586aJPpRms2ypeiGABYYo1jiUHPhAwKHhtz51DHKLjuvuGRPdX0FQrjFHW4oSKFhyo6GNtt6y5ZJmnEmGw7UfA/Kq+INtRkZrMmXh6vtSZtqgVtqRarNwqOJaGcUQ5od6rbJUQkVlrjS1k1O7iYH2SB/bnQHh4kKtxoCOrICfia1bVSa9P7JaX1xxKqtbiJmJwAC+D9iaW92qHSptmTm1W8csI7meCP8KW0jRKvphMCiuykE2saqst8EkNhOJllCBTKvCccQGxIbzxVV7bp5PD7TBvt74/rV72F1CFNaltYe7kWeHeRXBwV3xitWrcFFbCjSrJKT3m7cbYqBhRDcqgc1k3UaKsiIrhzjlXZNCXc6xRkt8qknZB8GNWJYJZYBsIZXQD04vD9iKkFK/WQytLGF4WY8RUgnOPMVB3j/lrq6d7sSOZnVZGEEGlv1ND9+/mK7WU9Kuopsm4iBnJphI2ds1H3nUU/Gp8jSHZKZHFIStUfH0pce1FByTd61OJW6VBx04lxSoLJxM3SnqAS0qW0dmZ1rtDaaQh71u8mI8MKHc/0rC3V7qXaK9VJCXZj/Dt49kT1P8AWq6ytZ9SvAqccssh3Ync9ST0r0XRtKg0uHhiAMjf3kmOfoOgqu5Zn+DU1HAvyS9k9OHZySG4R+9uOIGXiGV4cYIUdcedXeJbvtAtxHOyQSyIoSRQScsOZ+JOKDBHnU1tMI54XJICSxuT8HB/as+r0mJY5ZEuS/SavLLIsbfDNDqmrWMOpETXkMZaYwAM42Zc7HpyqyhQOqsp4gwyCORrxntzbWsuu6o/eYJu5S4QYwCx33O9cdne1l9oFu1nDI5hLFl7xA30JHKssG1BUWzxpytnucSDNFIMV5LB/aRqCgq9rFKwHvYI/eioe3naCcgQaWuDyxC5++ag2ySSR6um1TKcV5XD2k7ZTp/CsVGdgRDjH1NWFvqvbeQgNaW+3myqPrVW6iVHpKttTl/WsbaHthMQHbT1J9M5+hq1s4tca2Vrue2iffK9ycjc/wDF8/nS6j+h0XTOOtQSSAcyKrnjuQQX1CY+iKij64zQ8zsBjOfUnJqPUbHRYyXEajdxVN2iv1GkXcaAN/d7457nb7VGS7nG2/KoRDBdR91dkNHJJsMkZ4R+xarMM0ppsjOLcWkZbv4WBzGueR2FT6NIidoNMnhCoVkdSAMcXFGw/XFTarpC2F2ytLx26+JeAeKQZxwj13qvuLdrS8s7iJwRDdROWPmgYH+lb9TkxTxSUe6M2mx5YZYuXZ2v9Hpkl6VUcj1BoV9QbfHCKgkmG4bfG1ByzJvstcpOzbLgJl1BuEgsAPSq24uQ+cFmqKe6jUE8KZqum1AEH3R8K2YYWzFlnSoLVQoYnJLsD9qckdBXOoyd1Y6a0Yy0iMzfXaq/2xwBkV0tNDbDj8mPPO58/gsCit5Vx3YBoZbwcsVMtyCPFV9MptEmFH4afA/LUfeKdwa7EikYzS5AkAXG4psx5xtTBh1pmC8xSHZ2EQ75pGBT0qPHqa6U+tDsLOjbBeRpVwXPU01HI7iYnQtNi0uAouHmYfxJOvoPSrZW9aojdOGzmu49QJfhNXJKKpEZXJ7mXhfyFOimTiT8yMPnwnH3oFZ8qCp+ddLcvG6up3U5qGeG/HKP2iWCezLGX0zN9qLVf/6m4LEmK4himUg+8GjXP3BoWfTIo40mR8/48/qc1pe08KGDTL5F2EL2rHmQVPEn/KTVO8oKFHTjjA5HnXnVkltSR6KUFuYTptxNaxLJGF4QMcIwRWgsu1K54Z14Mc+DB+1YaIsjE20vD5cDbH5VLIZZl/ixENjwvjepU2+5XKKPUdP1u3uPdu48/kJKn7mry2nKrlh8g5x968GWWdWHGGIPIgZ+laPsn2jmsrhbe7ndrVzhXY54D0PpUZ43VpkKR7fBeRDh4IpHYnf3R+4oS01LUJ7u7hvLXu4Y2zFKWHjB8tulVvZjUIdTiWW1dXUMQcEEDHPI/rWh1lFtoB5schW678gKSb2sj5AJ7gL5YoKS53wDv61XXt+VYrnccz5Vn7jWWjlEgIOOYIH26VUk2ydpGguL5lJZWGRyqDVJzbXUMQ963UBv8Z3P6gfKqrRLuK81RMg91bjv5DgDwrvj5nA+dPPcNPPJNLu8jFmPUk5rpaHDcm2YtXlaikjY6bPa6rZGKWNFfhPC/mNqzWoQTwzSQzqi8T8RVRhQuc4Xz5j65oewv3tZQ6scfiA8/wDWry9vtPvNOJlfEq+7wjxVDUaaULjVp9qLsGpUqk3yu4JfaiYDGGcEuitgHzI3++aq7nVwoJDqaru0l4yW9rIp4Q6cPiOADz+PmayUupSO54SSTvkgAD5efzrNpse6KZbqHU2jUz6tx5yaCa9DueHnis2b1s4ck+uefrVt2XibVNesrWNSwaUNKBv4F8Tf8oNdOMVCLZglFtnoeqDuhaQnnHAoI6Hkf0oKRExmn1u5H+1p14uLu37vPUrsfuDQ/FxLgGtmBVjRkzO5uiTu08qfgXG+cVDuDzrsNkbmrSslEO2VamMbDkahMjLyO1SpMTSYxM7p1pzcMozg1zK5I2pKy8m50COheMeY3rtbketR8MZOcikEXNKkBP7RH1pqiCp5ilRSGZoabdSe7ayH/LXK6Ffkki1b0ztWhtdcglx3V8mGJAMiYAGeZAP2opNZjfHDNH424Yw+QQAN2P8A0K4E/VtSnWw7cfTMP9RnYtB1IJgxqp54ZxXLaXfxA8cTfEbitXbamJ1jkUwNG4Z/C2OBB+IjNEd6rsqu6AtwYHFjPENgdqpfrGp+i3+GYDHSwSXei3lk6MJyvtEQxvxoNwPiv6VjndyOJgDn8WRXoOsTvbPFdpG0bQujhiB4eLln0PSsl2j05LVln09GFncAywfiEZ/FGfgftio4cu7mSqzXPElFV4Kc8Yl4gMbZKmikvUAHIN58Q86HlOEU5AIwpBPM+e9QMwGPDkcyQK0tWU0WolRuLxFC32omOKJlCsVJYYyV51QCThwQ5Hp0qdZm2/iHPlUXB+AqLN5omswPYLo013daaZWEAu7fhPeI58RZmGEwCdxuc1qO22sztBb29jNE9xFOqtczSDGR4jsoAJ2Pl8q8ldyyhuP3RyJ2qEazOlt3EUrIiuzqpI4QxGDtjmRkZ9aEm1RCUIl/rGtztdIjLbMXyWZAWx9/j5VUXOoyGYo5kbhx4V8IFBpJLPK7RStxnJKE5JzzxVv2b05pePVtQ8VnAcrH/wC4ccl+GeZ6fUSVY1yR6SkaGyA0nRI4XUJd3xEkq+aRjkp+PP6VG9w/4WPwqRdcnupO7vtOtrl25MVKED4g1aSaPZTxJJE1xZsRujESj9jV+n9RwY1U+LMuo0GacrjyVMdw2M7fKp47k/lqeTQLhN7a5hlHQ+E/9fOhLm0vLEA3ULxg8mZfD9a6WPVYMvxkjn5NNlx/KLQJr49p0KVQvjgbvlB/L+IfT9Kws0pJ6dBnlW6EgkcF2BQ5UjyIPkfSsTrNo9nqMsWPPKHGxHlXOjDpZpQ8PlfqdNyeXFGflcP9AcSeZr0f+x+WOwuNU1mdA3s1v3cPqzHcfy/U15lGeLluW90DzNeiWPHpWiwacjYkY97NwnfiO4H3q+t7UF5KJPbFyLKRw7mQ82OakhlUc6q4p2VvHRAuVfkcV0EjmPnlhjzHyxSWbb1oMSY5OKfvHXxFhToQatyOHdcmuTc77Jihe8cDiGDTpOScFRQMPSZG3Jx8aRKlsg5oYEEZK4pK+DjFAEzTBNt6jNyR1px4juNq4dRnlSARuXP5qVMIz+U/WmpjPP7OSZLgeyuwwQSPez+1Xw1VltHedBxwsB3gGMk88jliq2ILZSwxPGSrYMzAbnI8qsvZZX7xEQXFpKPdQ+Jdv0rzmSSbs9PGO1BqTxd+8WOHMgQDJOUIySPjzwKKiJM2ZJG4ds8L7dBv8KqLeymi44op5Y4U3eK6hEgAzjw5xn4VZWzupbuI1MZyyiKVWfl5q42+RrPNRJxsm1uG9mt2uLaYznIJUqDlRy2PIgVT2GpQXUUlhqP/AGG4911zxQOPxhfP1XzFWUd7lBIQJckHIJX6+9+tVWqaTby5min4ZdsnYqT8Bk/ejFUVUhtvxyV+pWcukXfc3cSjvFzFPGQ6yDyZTyP6ioUuInXCpnO7cYx5b1awape2Nv7Hq2mC+09v/DdGUfFTjKt6j70bZdntF1rI0nXFtWOxt9RjwwPQOu3/ACitNquSHPgy7d1whsqWzjHWuhEeAjEYPMb7j5edaK//ALO+0Vt4oobW4A/FDOpJ+VAL2K7RZ4jp/D5eKRB+9SuP2Qt/QPEYgGG3GeQAOPv/AK1VywjeQoVDHlnAWtdY9itRkZfaL63hHIqh71vUYX961mk9jodORrhrfv3jHEsl0wGWxnAUZ4cdTxHpVDzwx+Sxw3eDG9nuzDyyR3V4ZrWN/cCnhkl89tvCMHc/Y1uxoMVw8KpH3dvCnAncvhQPRCNh/m3q1sdHgleLULslr3ugpAJAXqAp69SSf0q6jiCMRgFcflySawZtRPJLgsilEzlhoGj2zIzTkyA5HfLjB9BVq+kxnBVxn4cqMltlaAxyBGyMeJcg1RXhuuzd2LgLJPps5CuhY5t28iPTyx96qVy7j7+eQr/Y5Xw8Qx5bfrtXL6Vc8IUENjYKTt+laAYZVZWV0PQZP0H9a7YYUFceIeHI/wBaahXJBzb4ZgtW7ITXWXtEjifmeW9Uh7IapNGYNT00TxD3XWQHHr1B9R9K9QkXOO8PCc7EHG/x/YYpuB0VTKSRy4+HxfQfrVv/AKMq4b7EUofXc8th/s/n0riubKylu7gZ7trh0xEOoUe8fU4+HlVXcQX9oc30EkbHcmRSM/OvaGMmAUCnJ2XoOv8ApXchSRcSqsiZAUOM8XqR0FbdN6o8d7lZkz6RZOzo8SW4Leo+Fdgq3LavU73spod6rcVksT44eOE8ByfQbH5g1ltV7A39ove6ZP7aoGTHJhZBgemx+3wrsYfUsOTjsznZNFkj+TKyMvCMFh8664ldAAd6hleWCUx3ELxuvvI4wR8qeG4QEkptXQTvlGNxrgJhcBcF67RcuCr5oYzxE5pjMuPBQKixaR18xiohdPnAIHyqtknYb+VQ+1L0OaB7S+jllAJLU3fO586pI76QNjBxU66mE99TQG1lnxSfnpVXf7RgfrSoCmD3CgS+0jhAE3hPT/8ADQkVjh82k0kYTIXDnc1cd3HMJYOFWTvO8G27Z3ouzsH9tjVkXbLKgGxABYfy15F5tqPZ9FN2Bpa3jHhiv3jWFAuWjLM2OZJziovbCjNEuqNPJg7wWwfGdgMgfvVlcn25vZrdmSE+FmXm3UfSieyTWz9qbK0to1S3jJDYHvvg7n0GKUclq2iEsf0S2fZC4uo7K8vLuQ28q8fB3KbHzGOHpV3cdmtOs9Pu44xFFBKpEQYDZx69cirXXNRXT7VGQL/u0pIX9qC06VfZw1pxSooB7mQBgTyyDjOaxzzzk+5OGNpXRVyafca3p8UjtBGzD+Cj5BOOR9PvU0Gm6LAVtdThja/UlHLIMnoSQOmKz+q8enypNYXQIPF/ukjYMW+cDqPlmtjo3fXUK65LMsy7GSPu8AoRjiHntTe5RTT4JTikrCToulIrd3YR8bqTgp4TnzB/ap20bT1KmG1iB5q3Aufn6/Y+lEkljNYADKKGjf0J5U/tcbxmdhhc91cL8ds1Hd9so9yJ7eBQmBGvPPCBgHHMDoar5gbjtEkEILQ2MBmKPndnOB9ADRveskkkMjeJHCs4PMH3W+OdjVbpNw0+ra1eqeExyxxFR58KZIP1qyO2rIVLuW4YSDi4QYm8iPEtce9kRq3vYznkK4vrmO2vEdADDOocr5jzqQTKsXFGCSoLgY5nO1VWm6Da6tnaR94CCvhzzPkPP51Feym5jltbmzV7WQcBUvgsDzqacgRGFJyh4QFYLnPxqgvNRmtsi6h4gCQHhlGH8geE+6fTJ+NTtR+I4Qcg6wmFjO9pHOZOIl+7lwHUE9Rz3FFtdPCYYmhaKKRz/FYcvPG1ef6X2ge+7Yd69vJDHE/dxrJgsMHct8+VenNKJAcKGUjcHmfMU3Fx4bCa7MhiKsOJCjjrzqSTAxk5fOxIziqe9d9ImUxrxWUzKo4Tujk4+lGvMucB/U788VBz2qhbL5RzNCQQ0TcDvu3T/SnD+8diFGFHTFM2GGeL51wJkJKHbaqG+Sai2FRBkySc4G/xom3yybtgtz+FBLKODhBySamjlAkCZ2C5++9X45qLKpxdGW/tU0hJ9KXV7ZWEtrhJcfjjJ5n4HH1ryxJj5177qfBNpd6jqGj9mk4gf8Jr50gnTgQ8ecqK9T6bmc4bfo42sxpSssFlBPKpxKoGwFV4mXz5VKkqEe9XUsxbQlpiFOI80HJdMGx3VERzoPMEVzJdRA+4KQI4F/w7GI117fE/OE1C96n/AKQp4b6EHxwiglRKssBbKx4FKpVurQ/gApUC5CLSZ1unKnBEaY+1bJo1EFxMBiRITwkeX/WaVKvEajue1XYzl67RWEjRHgbhXdfgKC7O3Utnq1lJAQG70Ly8qVKrYfFgjd9ogPZrpsDM1vxt8cE/rWb0K9njZkVvCrbfUUqVY4/FmiC9gV2hhjm1bSWdRxXBcSEbcWCMVrtFiWC0vrePaJUIUdBvT0qJv2x/Uz5PiF/+Z2zjZmtWzj0NB3B4bLUsee9KlWeyEP8Av8hV7IeO8bbIgVvmCDVTortHN2jVTsL0H6gf1pUqti/ZIjS4J9XdhPb4PuxnH0qzVytqmOq/y5pUqqj3J5F7EPe+9xeYB/ehPYoXhWaQF3MXF4twDjOwpUqmu7IrhIwmrqLPtZbiDbiXf616tb4NksmBxYUk9TSpVql4/sV6jwVt+5uILiOUBlUFgPVTkfpQtt/EEjsTniP6UqVYptlkV7SW1kZryWNt1BxUQY9wz+eCfpSpVU3wSS5YQjEFiOfCDViwAI25tvSpVbjKcncWpf8Ac2qf/Um/lNfOsdrGFAGdh1pUq9Z6T8GcPXdxMgUYGajX3qVKuyuxgDIlHSiFgRjvmlSoEJ7eMEjFQSQoOQp6VArGSCPHKlSpUDP/2Q==' },
    { id: 6, name: 'Backpack', price: '$50', image: 'https://assets.ajio.com/medias/sys_master/root/20240713/N5xf/6691b1481d763220fa77612a/-473Wx593H-465733104-brown-MODEL.jpg' },
    { id: 7, name: 'Toy', price: '$20', image: 'https://media.istockphoto.com/id/115461651/photo/toy-dragon.jpg?s=612x612&w=0&k=20&c=rq8xSIIV6YQmAdvHD4J6RyuPH21kkpBKrGiH9wqIPPw=' },
    { id: 8, name: 'Shoes', price: '$75', image: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg' },
    { id: 9, name: 'Hat', price: '$30', image: 'https://media.istockphoto.com/id/1453988945/photo/yellow-bucket-hat-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Dwt6ToZZBqfZOiHj7S4lNZfBx4CsPM9_WEa8e4SPZC8=' },
  ]);

  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); 
  const [scrolledPast, setScrolledPast] = useState(false); 
  const [lovedProducts, setLovedProducts] = useState(new Set()); 
  const containerRef = useRef(null);

  const loadMoreProducts = useCallback(() => {
    setDisplayedProducts(products.slice(0, visibleCount));
  }, [products, visibleCount]);

  useEffect(() => {
    loadMoreProducts(); 

    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 300) {
          setScrolledPast(true);
        } else {
          setScrolledPast(false);
        }

        const containerBottom = containerRef.current.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (containerBottom < windowHeight + 200) {
          setVisibleCount(prevCount => prevCount + 3); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreProducts]);

  useEffect(() => {
    loadMoreProducts(); 
  }, [visibleCount, loadMoreProducts]);

  const handleLoveClick = (productId) => {
    setLovedProducts(prev => {
      const updated = new Set(prev);
      if (updated.has(productId)) {
        updated.delete(productId);
      } else {
        updated.add(productId);
      }
      return updated;
    });
  };

  return (
    <div ref={containerRef} style={{ flex: 1, padding: '20px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '20px',
        justifyContent: 'center',
      }}>
        {displayedProducts.map((product) => (
          <div key={product.id} style={{ position: 'relative', width: '300px', height: '400px' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '8px',
              }}
            />
            <h2 style={{ textAlign: 'center', fontSize: '14px', margin: '10px 0 0 0' }}>{product.name}</h2>
            <p style={{ textAlign: 'center', fontSize: '12px', margin: '0' }}>{product.price}</p>
            <span
              onClick={() => handleLoveClick(product.id)}
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                cursor: 'pointer',
                color: lovedProducts.has(product.id) ? 'red' : 'black',
                fontSize: '24px',
              }}
            >
              ❤️
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
const FilterMenu = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    idealFor: 'All',
    occasion: 'All',
    work: 'All',
    fabric: 'All',
    segment: 'All',
    suitableFor: 'All',
    rawMaterials: 'All',
    pattern: 'All',
  });

  const [dropdownVisibility, setDropdownVisibility] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const options = {
    idealFor: [
      { value: 'men', label: 'Men' },
      { value: 'women', label: 'Women' },
      { value: 'kids', label: 'Baby & Kids' },
    ],
  };

  const handleCheckboxChange = (filterName, value) => {
    const currentValue = selectedFilters[filterName];
    if (currentValue === value) {
      setSelectedFilters({
        ...selectedFilters,
        [filterName]: 'All',
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        [filterName]: value,
      });
    }
  };

  const toggleDropdown = (filterName) => {
    setDropdownVisibility({
      ...dropdownVisibility,
      [filterName]: !dropdownVisibility[filterName],
    });
  };

  const renderDropdown = (label, filterName) => (
    <div style={{ width: '200px', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', marginLeft: '20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          cursor: 'pointer',
        }}
        onClick={() => toggleDropdown(filterName)}
      >
        <span style={{ textTransform: 'uppercase' }}>{label}</span>
        <span>{dropdownVisibility[filterName] ? '↑' : '↓'}</span>
      </div>
      <div style={{ padding: '10px', textTransform: 'uppercase' }}>
        {selectedFilters[filterName]}
      </div>
      {dropdownVisibility[filterName] && (
        <div style={{ padding: '10px' }}>
          <div style={{ marginBottom: '5px' }}>
            <label>
              <input
                type="checkbox"
                checked={selectedFilters[filterName] === 'All'}
                onChange={() => handleCheckboxChange(filterName, 'All')}
              />
              ALL
            </label>
          </div>
          {options[filterName]?.map(option => (
            <div key={option.value} style={{ marginBottom: '5px' }}>
              <label>
                <input
                  type="checkbox"
                  value={option.value}
                  checked={selectedFilters[filterName] === option.value}
                  onChange={() => handleCheckboxChange(filterName, option.value)}
                />
                {option.label.toUpperCase()}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="filter-menu" style={{ width: '200px', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', padding: '10px' }}>
        <label style={{ textTransform: 'uppercase', marginLeft: '60px' }}>
          <input type="checkbox" />
          CUSTOMIZABLE
        </label>
        {renderDropdown('Ideal For', 'idealFor')}
        {renderDropdown('Occasion', 'occasion')}
        {renderDropdown('Work', 'work')}
        {renderDropdown('Fabric', 'fabric')}
        {renderDropdown('Segment', 'segment')}
        {renderDropdown('Suitable For', 'suitableFor')}
        {renderDropdown('Raw Materials', 'rawMaterials')}
        {renderDropdown('Pattern', 'pattern')}
      </div>
      <Product />
    </div>
  );
};

export default FilterMenu;
