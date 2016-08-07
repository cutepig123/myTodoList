http://downloads.openwrt.org/barrier_breaker/14.07/ramips/mt7620a

//root@OpenWrt:~# /usr/sbin/asterisk -vvvgc
Privilege escalation protection disabled!
See https://wiki.asterisk.org/wiki/x/1gKfAQ for more details.
Asterisk already running on /var/run/asterisk/asterisk.ctl.  Use 'asterisk -r' to connect.
//root@OpenWrt:~# /usr/sbin/asterisk -rvvvgc
Asterisk 1.8.30.0, Copyright (C) 1999 - 2013 Digium, Inc. and others.
Created by Mark Spencer <markster@digium.com>
Asterisk comes with ABSOLUTELY NO WARRANTY; type 'core show warranty' for details.
This is free software, with components licensed under the GNU General Public
License version 2 and other licenses; you are welcome to redistribute it under
certain conditions. Type 'core show license' for details.
=========================================================================
Running as user 'nobody'
Running under group 'nogroup'
Connected to Asterisk 1.8.30.0 currently running on OpenWrt (pid = 2109)
Verbosity was 0 and is now 3
OpenWrt*CLI>
//OpenWrt*CLI>?
!            aoc          cc           cdr          cel          channel
cli          config       core         data         database     dialplan
dnsmgr       event        features     group        gtalk        http
indication   jabber       keys         local        logger       manager
module       no           parkedcalls  rtcp         rtp          say
sip          stun         timing       udptl

//OpenWrt*CLI> core show help core
           core abort shutdown Cancel a running shutdown
       core ping taskprocessor Ping a named task processor
                   core reload Global reload
       core restart gracefully Restart Asterisk gracefully
              core restart now Restart Asterisk immediately
  core restart when convenient Restart Asterisk at empty call volume
        core set debug channel Enable/disable debugging on a channel
      core set {debug|verbose} Set level of debug/verbose chattiness
core show applications [like|d Shows registered dialplan applications
         core show application Describe a specific dialplan application
      core show calls [uptime] Display information on calls
core show channels [concise|ve Display information on channels
             core show channel Display information on a specific channel
        core show channeltypes List available channel types
         core show channeltype Give more details on that channel type
core show codecs [audio|video| Displays a list of codecs
               core show codec Shows a specific codec
     core show config mappings Display config mappings (file names to config engines)
        core show file formats Displays file formats
    core show functions [like] Shows registered dialplan functions
            core show function Describe a specific dialplan function
                core show help Display help list, or specific help on a command
               core show hints Show dialplan hints
                core show hint Show dialplan hint
       core show image formats Displays image formats
             core show license Show the license(s) for this copy of Asterisk
            core show switches Show alternative switches
      core show taskprocessors List instantiated task processors and statistics
         core show translation Display translation matrix
    core show uptime [seconds] Show uptime information
             core show version Display version info
            core show warranty Show the warranty (if any) for this copy of Asterisk
          core stop gracefully Gracefully shut down Asterisk
                 core stop now Shut down Asterisk immediately
     core stop when convenient Shut down Asterisk at empty call volume
          core waitfullybooted Wait for Asterisk to be fully booted
OpenWrt*CLI>


OpenWrt*CLI> core show help module
                   module load Load a module by name
                 module reload Reload configuration for a module
            module show [like] List modules and info
                 module unload Unload a module by name
OpenWrt*CLI>

OpenWrt*CLI> module show
Module                         Description                              Use Count
res_jabber.so                  AJI - Asterisk Jabber Interface          0
res_clioriginate.so            Call origination and redirection from th 0
res_rtp_asterisk.so            Asterisk RTP Stack                       0
pbx_config.so                  Text Extension Configuration             0
func_callerid.so               Party ID related dialplan functions (Cal 0
func_channel.so                Channel information dialplan functions   0
func_logic.so                  Logical dialplan functions               0
func_strings.so                String handling dialplan functions       0
chan_local.so                  Local Proxy Channel (Note: used internal 0
chan_gtalk.so                  Gtalk Channel Driver                     0
res_crypto.so                  Cryptographic Digital Signatures         0
chan_sip.so                    Session Initiation Protocol (SIP)        0
codec_alaw.so                  A-law Coder/Decoder                      0
codec_a_mu.so                  A-law and Mulaw direct Coder/Decoder     0
codec_gsm.so                   GSM Coder/Decoder                        0
codec_ulaw.so                  mu-Law Coder/Decoder                     0
format_gsm.so                  Raw GSM data                             0
format_pcm.so                  Raw/Sun uLaw/ALaw 8KHz (PCM,PCMA,AU), G. 0
format_wav_gsm.so              Microsoft WAV format (Proprietary GSM)   0
app_dial.so                    Dialing Application                      0
app_playback.so                Sound File Playback Application          0
app_record.so                  Trivial Record Application               0
app_system.so                  Generic System() application             0
app_disa.so                    DISA (Direct Inward System Access) Appli 0
app_authenticate.so            Authentication Application               0
app_senddtmf.so                Send DTMF digits Application             0
func_cut.so                    Cut out information from a string        0
func_timeout.so                Channel timeout dialplan functions       0
28 modules loaded
OpenWrt*CLI> module show
Module                         Description                              Use Count
res_jabber.so                  AJI - Asterisk Jabber Interface          0
res_clioriginate.so            Call origination and redirection from th 0
res_rtp_asterisk.so            Asterisk RTP Stack                       0
pbx_config.so                  Text Extension Configuration             0
func_callerid.so               Party ID related dialplan functions (Cal 0
func_channel.so                Channel information dialplan functions   0
func_logic.so                  Logical dialplan functions               0
func_strings.so                String handling dialplan functions       0
chan_local.so                  Local Proxy Channel (Note: used internal 0
chan_gtalk.so                  Gtalk Channel Driver                     0
res_crypto.so                  Cryptographic Digital Signatures         0
chan_sip.so                    Session Initiation Protocol (SIP)        0
codec_alaw.so                  A-law Coder/Decoder                      0
codec_a_mu.so                  A-law and Mulaw direct Coder/Decoder     0
codec_gsm.so                   GSM Coder/Decoder                        0
codec_ulaw.so                  mu-Law Coder/Decoder                     0
format_gsm.so                  Raw GSM data                             0
format_pcm.so                  Raw/Sun uLaw/ALaw 8KHz (PCM,PCMA,AU), G. 0
format_wav_gsm.so              Microsoft WAV format (Proprietary GSM)   0
app_dial.so                    Dialing Application                      0
app_playback.so                Sound File Playback Application          0
app_record.so                  Trivial Record Application               0
app_system.so                  Generic System() application             0
app_disa.so                    DISA (Direct Inward System Access) Appli 0
app_authenticate.so            Authentication Application               0
app_senddtmf.so                Send DTMF digits Application             0
func_cut.so                    Cut out information from a string        0
func_timeout.so                Channel timeout dialplan functions       0
28 modules loaded
OpenWrt*CLI>

发现没有chan_dongle.so

尝试load他，但是失败了
OpenWrt*CLI> module load chan_dongle.so
Unable to load module chan_dongle.so
Command 'module load chan_dongle.so' failed.
[Nov 27 14:46:49] WARNING[2566]: loader.c:835 inspect_module: Module 'chan_dongle.so' was not compiled with the same compile-time options as this version of Asterisk.
[Nov 27 14:46:49] WARNING[2566]: loader.c:836 inspect_module: Module 'chan_dongle.so' will not be initialized as it may cause instability.
[Nov 27 14:46:49] WARNING[2566]: loader.c:923 load_resource: Module 'chan_dongle.so' could not be loaded.
OpenWrt*CLI>

