# A comment, but jump to `a` to process it
\:rem.*//: b a

# A comment, skip the line.
\://: { p ; d }

: a 

# Wrap the line with the function. i.e. u(1rem 0 10px 0); Matches include:
# font-size: 1rem;
# padding-right: -1rem;
# margin-right: -.1rem;
# margin-right: -12.1rem;
# margin: 1rem 0 0 0;
# margin: 1rem 0 10px 0;
/rem/ s/:\s*((-?([0-9]+)?(\.?[0-9]+)(\w+|%)?\s*)+)\s*;/: u(\1);/
