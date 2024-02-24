do this to restor SSH on an Proxmox unprivileged Ubuntu Container



nano startssh.sh

chmod +x startssh.sh

crontab -e

@reboot /root/startssh.sh
