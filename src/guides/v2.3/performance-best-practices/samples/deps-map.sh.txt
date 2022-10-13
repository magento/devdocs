awk 'END {
  for (R in rec) {
    n = split(rec[R], t, "/")
    if (n > 1)
      dup[n] = dup[n] ? dup[n] RS sprintf("\t%-20s -->\t%s", rec[R], R) : \
        sprintf("\t%-20s -->\t%s", rec[R], R)
    }
  for (D in dup) {
    printf "records found in %d files:\n\n", D
    printf "%s\n\n", dup[D]
    }
  }
{
  rec[$0] = rec[$0] ? rec[$0] "/" FILENAME : FILENAME
  }' bundle/*.txt