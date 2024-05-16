library(tidyverse)
library(sf)

data <- read_sf("data/fixed-bolivia-2023-q4.geojson")
data <- data %>%
  mutate(
    avg_d_mbps = (avg_d_kbps / 1000) %>% round(1),
  ) %>% 
  filter(avg_d_mbps < max(avg_d_mbps))
  

data %>%
  ggplot(aes(x = avg_d_mbps)) +
  geom_boxplot() +
  labs(title = "Bolivia 2023 Q4",
       x = "Download Speed (Mbps)",
       y = "Count") +
  theme_minimal() +
  coord_flip()

median(data$avg_d_mbps)

# save as geojson
write_sf(data, "out/fixed-bolivia-2023-q4.geojson", driver = "GeoJSON")